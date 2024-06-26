/* eslint-disable unicorn/prefer-module */
const { FlatCompat } = require('@eslint/eslintrc');
const globals = require('globals');

const ng = require('@angular-eslint/eslint-plugin');
const baseConfig = require('../../eslint.config.js');
const js = require('@eslint/js');

const tseslint = require('typescript-eslint');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

module.exports = tseslint.config(
  ...baseConfig,

  ...compat.extends('plugin:playwright/recommended'),

  {
    ignores: ['!**/*', '**/storybook-static', '**/node_modules', '**/dist'],
  },

  {
    languageOptions: {
      parserOptions: {
        project: ['tsconfig.*?.json'],
        tsconfigRootDir: __dirname,
      },
      globals: {
        ...globals.browser,
        ...globals.serviceworker,
      },
    },
  },

  {
    files: ['**/*.ts'],
    plugins: {
      // TODO: missing: @nx/angular, process-inline-templates, johnpapa
      '@angular-eslint': ng,
    },
    rules: {
      ...ng.configs.recommended.rules,
      '@angular-eslint/directive-selector': [
        'error',
        { type: 'attribute', prefix: 'app', style: 'camelCase' },
      ],
      '@angular-eslint/component-selector': [
        'error',
        { type: 'element', prefix: 'app', style: 'kebab-case' },
      ],
    },
  },

  {
    files: ['**/*.spec.ts'],
    languageOptions: {
      globals: {
        ...globals.jasmine,
      },
    },
  },

  // doesn't  work
  // ...compat
  //   .config({
  //     extends: [
  //       'plugin:@nx/angular',
  //       'plugin:@angular-eslint/template/process-inline-templates',
  //     ],
  //   })
  //   .map((config) => ({
  //     ...config,
  //     files: ['**/*.ts'],
  //     rules: {
  //       ...config.rules,
  //       '@angular-eslint/directive-selector': [
  //         'error',
  //         {
  //           type: 'attribute',
  //           prefix: 'app',
  //           style: 'camelCase',
  //         },
  //       ],
  //       '@angular-eslint/component-selector': [
  //         'error',
  //         {
  //           type: 'element',
  //           prefix: 'app',
  //           style: 'kebab-case',
  //         },
  //       ],
  //     },
  //   })),

  ...compat
    .config({ extends: ['plugin:@nx/angular-template'] })
    .map((config) => ({
      ...config,
      files: ['**/*.html'],
      rules: {
        ...config.rules,
      },
    }))
);
