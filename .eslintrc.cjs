module.exports = {
  extends: [
    'airbnb',
    'airbnb-typescript',
    'prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
  plugins: ['@typescript-eslint'],
  root: true,
};
