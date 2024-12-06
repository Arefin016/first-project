import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ['dist/'], // Ignore specific directories or files
    // extends: [
    //   'eslint:recommended', // ESLint's recommended rules
    //   'plugin:@typescript-eslint/recommended', // TypeScript recommended rules
    //   'plugin:prettier/recommended', // Add Prettier's recommended rules
    // ],
  },

  {
    languageOptions: {
      globals: globals.browser, // Define global variables
    },

    rules: {
      'no-unused-vars': 'error',
      'no-unused-expressions': 'error',
      'prefer-const': 'error',
      'no-console': 'warn',
      'no-undef': 'error',
    },
  },
  pluginJs.configs.recommended, // Use recommended JS settings
  ...tseslint.configs.recommended, // Use recommended TS settings
];
