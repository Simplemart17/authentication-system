module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    mocha: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "no-console": 0,
    "max-len": [2, 120, 4, {'ignoreUrls': true}],
    "no-param-reassign": 0,
    "consistent-return": 0,
    "no-unused-vars": 0,
  },
};
