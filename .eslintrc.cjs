/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: {
    browser: true,
    es2024: true,
    node: true
  },
  extends: ['plugin:vue/vue3-recommended', 'plugin:vuejs-accessibility/recommended', 'eslint:recommended', 'prettier', '@vue/typescript/recommended', '@vue/prettier', '@vue/eslint-config-typescript', 'plugin:storybook/recommended'],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  plugins: ['vuejs-accessibility'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
