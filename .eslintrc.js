module.exports = {
  rules: {
    'my-custom-rule': 1,
    'strict': 2
  },
  "extends": "eslint: recommended",
  globals: [
    'jQuery',
    '$'
  ],
  envs: {
    'browser': true,
    "node": true,
    "es6": true
  }
}