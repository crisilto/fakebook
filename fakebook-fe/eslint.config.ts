import * as js from '@eslint/js';
import * as typescriptEslint from '@typescript-eslint/eslint-plugin';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
      parser: '@typescript-eslint/parser',
    },
    settings: { react: { version: 'detect' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': typescriptEslint,
    },
    rules: {
      ...js.configs.recommended.rules,

      'react/display-name': 'off',
      'react/jsx-boolean-value': 'off',
      'react/jsx-key': 'warn',
      'react/jsx-no-comment-textnodes': 'warn',
      'react/jsx-no-duplicate-props': 'warn',
      'react/jsx-no-target-blank': 'off', 
      'react/jsx-no-undef': 'error',
      'react/jsx-uses-react': 'off',
      'react/jsx-uses-vars': 'warn',
      'react/no-children-prop': 'warn',
      'react/no-danger-with-children': 'warn',
      'react/no-deprecated': 'warn',
      'react/no-direct-mutation-state': 'warn',
      'react/no-find-dom-node': 'warn',
      'react/no-is-mounted': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/require-render-return': 'error',

      ...reactHooks.configs.recommended.rules,

      ...typescriptEslint.configs.recommended.rules,

      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
];
