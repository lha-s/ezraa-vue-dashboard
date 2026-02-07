// eslint.config.js
import vue from 'eslint-plugin-vue';
import tseslint from '@typescript-eslint/eslint-plugin';
import parserTs from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';
import importPlugin from 'eslint-plugin-import';
import vueParser from 'vue-eslint-parser';
import globals from 'globals';
import eslintConfigPrettier from 'eslint-config-prettier';

const safeGlobals = {
  ...globals.browser,
  ...globals.node,
  ...globals.es2021,
};

export default [
  {
    ignores: ['node_modules/**', 'dist/**', 'build/**'],
  },
  {
    files: ['**/*.ts', '**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: parserTs,
        ecmaVersion: 'latest',
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
      },
      globals: safeGlobals,
    },
    plugins: {
      vue,
      '@typescript-eslint': tseslint,
      import: importPlugin,
      prettier,
    },
    settings: {
      'import/resolver': {
        //  Ensure this package is installed:
        // npm install -D eslint-import-resolver-typescript
        typescript: {
          project: './tsconfig.json',
        },
        alias: {
          map: [['@', './src']],
          extensions: ['.ts', '.js', '.vue', '.json'],
        },
      },
    },
    rules: {
      //  Prettier
      'prettier/prettier': 'warn',
      quotes: ['warn', 'single'],
      semi: ['warn', 'always'],
      indent: 'off',

      //  Vue
      'vue/html-indent': ['warn', 2],
      'vue/multi-word-component-names': 'off',
      'vue/no-v-html': 'off',
      'vue/require-default-prop': 'off',
      'vue/attribute-hyphenation': 'off',

      //  TypeScript
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

      //  Imports
      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index'], 'object', 'type'],
          pathGroups: [
            {
              pattern: 'vue',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '@/**',
              group: 'internal',
            },
          ],
          pathGroupsExcludedImportTypes: [],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'import/no-unresolved': 'error', // enabled now that resolver is fixed
      'import/no-duplicates': 'error',
      'import/first': 'error',
      'import/newline-after-import': ['warn', { count: 1 }],
      'import/no-unresolved': [
        'error',
        { ignore: ['^md-editor-v3', '\\.css$'] }, //  ignore these imports
      ],
    },
  },
  eslintConfigPrettier,
];
