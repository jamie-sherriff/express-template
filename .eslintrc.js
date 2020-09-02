module.exports = {
  env: {
    commonjs: true,
    es2020: true,
    node: true,
    'jest/globals': true,
  },
  extends: ['plugin:prettier/recommended', 'airbnb-base'],
  plugins: ['prettier', 'jest'],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'prettier/prettier': 'error',
    'arrow-body-style': 'off',
  },
};
