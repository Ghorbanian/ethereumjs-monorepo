window.BENCHMARK_DATA = {
  "lastUpdate": 1615373665001,
  "repoUrl": "https://github.com/ethereumjs/ethereumjs-monorepo",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "christophergewecke@gmail.com",
            "name": "cgewecke",
            "username": "cgewecke"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "562010578317aa871ffb86d5a38017a085fb7cb6",
          "message": "Remove @types/bn.js from block,blockchain,trie,tx,vm packages (#1136)\n\n* deps -> remove @types/bn.js from block,blockchain,trie,tx,vm packages\r\n* vm -> import BN from ethereumjs-util everywhere\r\n* tx -> import BN from ethereumjs-util in TransactionFactory.ts",
          "timestamp": "2021-03-04T19:07:53-08:00",
          "tree_id": "2855768b4cd2b83560f1932ebcaf550ed13fe3c7",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/562010578317aa871ffb86d5a38017a085fb7cb6"
        },
        "date": 1614914120450,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1435,
            "range": "±3.08%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1429,
            "range": "±4.85%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1456,
            "range": "±1.39%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1444,
            "range": "±1.25%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1209,
            "range": "±13.27%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1420,
            "range": "±1.14%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1373,
            "range": "±1.53%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1367,
            "range": "±0.92%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1369,
            "range": "±1.39%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1365,
            "range": "±0.76%",
            "unit": "ops/sec",
            "extra": "82 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "11a29cfed063d00f65bb345ad1995671aac45fd6",
          "message": "Merge pull request #1129 from ethereumjs/yolov3-client\n\nCommon: add YoloV3 network",
          "timestamp": "2021-03-05T12:04:14+01:00",
          "tree_id": "d363ff86a7b66642db38e724e1b178cc673ebcb1",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/11a29cfed063d00f65bb345ad1995671aac45fd6"
        },
        "date": 1614942644490,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1716,
            "range": "±4.74%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1661,
            "range": "±7.25%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1715,
            "range": "±1.38%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1551,
            "range": "±9.61%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1713,
            "range": "±1.15%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1694,
            "range": "±1.43%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1677,
            "range": "±1.44%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1685,
            "range": "±1.05%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1502,
            "range": "±10.45%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1179,
            "range": "±20.11%",
            "unit": "ops/sec",
            "extra": "73 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2e7769369dab602b97c8dc477bc978c922a1883f",
          "message": "Merge pull request #1138 from ethereumjs/improve-tx-backwards-compatibility\n\nTx Renaming / Improve backwards-compatibility",
          "timestamp": "2021-03-05T18:53:54+01:00",
          "tree_id": "8fa243b580cba853ba427c1019e0feda6bb38a0b",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/2e7769369dab602b97c8dc477bc978c922a1883f"
        },
        "date": 1614967038056,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1836,
            "range": "±3.24%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1749,
            "range": "±4.70%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1682,
            "range": "±8.76%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1833,
            "range": "±1.48%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1755,
            "range": "±2.00%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1707,
            "range": "±1.66%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1296,
            "range": "±14.83%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1606,
            "range": "±1.61%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1555,
            "range": "±1.54%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1671,
            "range": "±1.75%",
            "unit": "ops/sec",
            "extra": "86 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c8908ea70ad3d04c0b629bee092101e17b15d36b",
          "message": "VM, Block: large ChainID ecrecover fixes (#1139)\n\n* vm: fixed ecrecover call in ECRECOVER precompile for large chain IDs\r\n* block: fixed cliqueSigner() address recovery from signature for large chain IDs",
          "timestamp": "2021-03-05T10:27:53-08:00",
          "tree_id": "a1860ee25e53e702ed753232fbdd9792b3367be9",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/c8908ea70ad3d04c0b629bee092101e17b15d36b"
        },
        "date": 1614969087967,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1620,
            "range": "±4.19%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1565,
            "range": "±5.05%",
            "unit": "ops/sec",
            "extra": "86 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1463,
            "range": "±8.50%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1557,
            "range": "±2.67%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1553,
            "range": "±1.21%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1488,
            "range": "±2.22%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1154,
            "range": "±15.71%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1485,
            "range": "±1.28%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1408,
            "range": "±1.43%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1457,
            "range": "±2.01%",
            "unit": "ops/sec",
            "extra": "80 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jochembrouwer96@gmail.com",
            "name": "Jochem Brouwer",
            "username": "jochem-brouwer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "94651f7b42bb24a34dcc7fdd4d2daadb568d7c23",
          "message": "Merge pull request #1141 from ethereumjs/eip2718-eip2930-improvements\n\nEIP-2718/EIP-2930 Typed Tx Improvements and Tests",
          "timestamp": "2021-03-07T18:27:47+01:00",
          "tree_id": "d671948fd13c0b07df55977664b504e8cf25114e",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/94651f7b42bb24a34dcc7fdd4d2daadb568d7c23"
        },
        "date": 1615138286527,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1449,
            "range": "±4.55%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1456,
            "range": "±5.98%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1483,
            "range": "±1.48%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1493,
            "range": "±1.07%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1258,
            "range": "±12.63%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1435,
            "range": "±1.18%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1424,
            "range": "±1.36%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1413,
            "range": "±1.18%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1164,
            "range": "±13.34%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1153,
            "range": "±14.27%",
            "unit": "ops/sec",
            "extra": "72 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "82018919031a8dd9fd15fb62882ac33ce1c587f8",
          "message": "Merge pull request #1142 from ethereumjs/update-tests-and-berlin-HF\n\nUpdate ethereum-tests submodule to 8.0.0 / Remove EIP-2315 from berlin",
          "timestamp": "2021-03-08T22:45:37+01:00",
          "tree_id": "949c94cdf006e8ade9fe771dc5564ae966d4e8e0",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/82018919031a8dd9fd15fb62882ac33ce1c587f8"
        },
        "date": 1615240142910,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1738,
            "range": "±3.37%",
            "unit": "ops/sec",
            "extra": "89 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1629,
            "range": "±9.16%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1872,
            "range": "±1.31%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1561,
            "range": "±10.00%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1752,
            "range": "±1.57%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1720,
            "range": "±1.04%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1799,
            "range": "±1.59%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1747,
            "range": "±1.70%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1722,
            "range": "±1.63%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1170,
            "range": "±18.55%",
            "unit": "ops/sec",
            "extra": "64 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5a860531455e31441a20eaa6a11cfd7cf11e814b",
          "message": "Merge pull request #1143 from ethereumjs/fix-trie-benchmarks\n\nTrie: fix benchmarks",
          "timestamp": "2021-03-09T11:07:06+01:00",
          "tree_id": "e6fd5db1387967462c840857c6974e76716dc0ca",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/5a860531455e31441a20eaa6a11cfd7cf11e814b"
        },
        "date": 1615284645689,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1677,
            "range": "±2.02%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1624,
            "range": "±4.10%",
            "unit": "ops/sec",
            "extra": "91 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1643,
            "range": "±0.60%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1615,
            "range": "±1.15%",
            "unit": "ops/sec",
            "extra": "92 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1460,
            "range": "±8.78%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1443,
            "range": "±7.44%",
            "unit": "ops/sec",
            "extra": "90 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1541,
            "range": "±1.31%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1546,
            "range": "±1.04%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1495,
            "range": "±1.41%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1489,
            "range": "±1.51%",
            "unit": "ops/sec",
            "extra": "77 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "53150c159b559b31b6b7c321d784dbb11b082fb9",
          "message": "Merge pull request #1130 from ethereumjs/add-new-rpc-methods\n\nClient: Add 6 new RPC methods",
          "timestamp": "2021-03-09T11:56:38+01:00",
          "tree_id": "fa1f03b097c5cb8d1669f94e7e06b44967f86647",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/53150c159b559b31b6b7c321d784dbb11b082fb9"
        },
        "date": 1615287761718,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1642,
            "range": "±6.08%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1537,
            "range": "±5.73%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1650,
            "range": "±1.94%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1440,
            "range": "±11.44%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1669,
            "range": "±3.47%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1971,
            "range": "±2.86%",
            "unit": "ops/sec",
            "extra": "82 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1563,
            "range": "±2.81%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1338,
            "range": "±18.14%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1810,
            "range": "±1.82%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1657,
            "range": "±2.14%",
            "unit": "ops/sec",
            "extra": "76 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e8bdbf67fd675e86c0d98de5b46380a896639090",
          "message": "Merge pull request #1144 from ethereumjs/tx-followup-work\n\nTx: Small fixes and improvements",
          "timestamp": "2021-03-10T11:50:23+01:00",
          "tree_id": "725b960f2a1452401a97296293599883547fb6f8",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/e8bdbf67fd675e86c0d98de5b46380a896639090"
        },
        "date": 1615373664248,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "Block 9422905",
            "value": 1456,
            "range": "±4.09%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422906",
            "value": 1497,
            "range": "±5.26%",
            "unit": "ops/sec",
            "extra": "85 samples"
          },
          {
            "name": "Block 9422907",
            "value": 1439,
            "range": "±7.34%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422908",
            "value": 1537,
            "range": "±0.95%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "Block 9422909",
            "value": 1370,
            "range": "±7.74%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Block 9422910",
            "value": 1314,
            "range": "±12.25%",
            "unit": "ops/sec",
            "extra": "84 samples"
          },
          {
            "name": "Block 9422911",
            "value": 1450,
            "range": "±1.27%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "Block 9422912",
            "value": 1443,
            "range": "±1.20%",
            "unit": "ops/sec",
            "extra": "80 samples"
          },
          {
            "name": "Block 9422913",
            "value": 1454,
            "range": "±0.98%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "Block 9422914",
            "value": 1425,
            "range": "±1.30%",
            "unit": "ops/sec",
            "extra": "83 samples"
          }
        ]
      }
    ]
  }
}