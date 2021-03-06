module.exports = {
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
    "mocha": true
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "extends": ["eslint:recommended"],
  "globals": {
    "define": true
  },
  "rules": {
    "indent": 2
  }
};
