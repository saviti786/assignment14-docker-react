import js from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import prettier from 'eslint-plugin-prettier';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import jest from 'eslint-plugin-jest';
import globals from 'globals';

export default [
  js.configs.recommended,

  {
    files: ['src/**/*.{js,jsx,ts,tsx}'],
    ignores: ['node_modules', 'build'],

    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
      globals: {
        ...globals.browser,
        ...globals.jest,
      },
    },

    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooks,
      prettier,
      '@typescript-eslint': tseslint,
      jest,
    },

    rules: {
      ...tseslint.configs['recommended'].rules,

      'prettier/prettier': 'error',

      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',

      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },

    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
