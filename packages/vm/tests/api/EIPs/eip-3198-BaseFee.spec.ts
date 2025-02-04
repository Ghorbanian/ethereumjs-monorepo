import { Block } from '@ethereumjs/block'
import { Chain, Common, Hardfork } from '@ethereumjs/common'
import { EVM } from '@ethereumjs/evm'
import { InterpreterStep } from '@ethereumjs/evm/dist/interpreter'
import { FeeMarketEIP1559Transaction, TypedTransaction } from '@ethereumjs/tx'
import { Address, privateToAddress } from '@ethereumjs/util'
import * as tape from 'tape'

import { VM } from '../../../src/vm'

const GWEI = BigInt('1000000000')
const ETHER = GWEI * GWEI

const common = new Common({
  eips: [1559, 2718, 2930, 3198],
  chain: Chain.Mainnet,
  hardfork: Hardfork.London,
})

// Small hack to hack in the activation block number
// (Otherwise there would be need for a custom chain only for testing purposes)
common.hardforkBlock = function (hardfork: string | undefined) {
  if (hardfork === 'london') {
    return BigInt(1)
  } else if (hardfork === 'dao') {
    // Avoid DAO HF side-effects
    return BigInt(99)
  }
  return BigInt(0)
}

const coinbase = new Address(Buffer.from('11'.repeat(20), 'hex'))
const pkey = Buffer.from('20'.repeat(32), 'hex')
const sender = new Address(privateToAddress(pkey))

/**
 * Creates an EIP1559 block
 * @param baseFee - base fee of the block
 * @param transaction - the transaction in the block
 * @param txType - the txtype to use
 */
function makeBlock(baseFee: bigint, transaction: TypedTransaction, txType: number) {
  const signed = transaction.sign(pkey)
  const json = <any>signed.toJSON()
  json.type = txType
  const block = Block.fromBlockData(
    {
      header: {
        number: BigInt(1),
        coinbase,
        baseFeePerGas: baseFee,
        gasLimit: 500000,
      },
      transactions: [json],
    },
    { common }
  )
  return block
}

tape('EIP3198 tests', (t) => {
  t.test('test EIP3198 gas fee and correct value', async (st) => {
    // Initial base fee for EIP1559
    const fee = BigInt(1000000000)
    const tx = new FeeMarketEIP1559Transaction(
      {
        maxFeePerGas: GWEI * BigInt(5),
        maxPriorityFeePerGas: GWEI * BigInt(2),
        to: undefined, // Create contract
        gasLimit: BigInt(210000),
        data: '0x4800',
      },
      {
        common,
      }
    )
    const block = makeBlock(fee, tx, 2)
    const vm = await VM.create({ common })
    await vm.stateManager.modifyAccountFields(sender, { balance: ETHER })

    // Track stack

    let stack: any = []
    ;(<EVM>vm.evm).on('step', (istep: InterpreterStep) => {
      if (istep.opcode.name === 'STOP') {
        stack = istep.stack
      }
    })

    const results = await vm.runTx({
      tx: block.transactions[0],
      block,
    })
    const txBaseFee = block.transactions[0].getBaseFee()
    const gasUsed = results.totalGasSpent - txBaseFee
    st.equal(gasUsed, BigInt(2), 'gas used correct')
    st.equal(stack[0], fee, 'right item pushed on stack')
    st.end()
  })
})
