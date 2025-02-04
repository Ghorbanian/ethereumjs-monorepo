module.exports = {
  extends: '../../config/eslint.js',
  rules: {
    '@typescript-eslint/no-floating-promises': 'off',
    'no-redeclare': 'off',
    'no-undef': 'off' // temporary until fixed: 'NodeJS' is not defined
  }
}
