// This file i needed to allow lint-staged to work with this subproject independently from the root and applying specific
// eslint configuration to the project.

/* eslint-disable unicorn/prefer-module */
const defaultBase = require('../../lint-staged.config');

module.exports = defaultBase;
