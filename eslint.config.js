import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
  {
    ignores: ['dist', 'src-tauri/target/**'],
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.es2021,
        React: true,
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      '@typescript-eslint': tseslint,
      prettier: prettier,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...prettierConfig.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          trailingComma: 'es5',
          semi: true,
          tabWidth: 2,
        },
      ],
    },
  },
];
