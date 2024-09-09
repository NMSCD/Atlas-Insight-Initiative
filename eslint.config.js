import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginYml from 'eslint-plugin-yml';
import eslintPluginVueScopedCSS from 'eslint-plugin-vue-scoped-css';
import html from '@html-eslint/eslint-plugin';
import json from 'eslint-plugin-json';

export default [
  { ignores: ['dist/*'] },
  { files: ['**/*.{js,mjs,cjs,ts,vue}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },
  ...eslintPluginYml.configs['flat/recommended'],
  ...eslintPluginVueScopedCSS.configs['flat/recommended'],
  { files: ['**/*.vue'], languageOptions: { parserOptions: { parser: tseslint.parser } } },
  eslintConfigPrettier,
  {
    ...html.configs['flat/recommended'],
    files: ['**/*.html'],
    rules: {
      '@html-eslint/indent': ['error', 2],
    },
  },
  {
    ...json.configs['recommended'],
    files: ['**/*.json'],
    ignores: ['tsconfig.json'],
  },
];
