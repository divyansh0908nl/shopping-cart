const path = require('path');

module.exports = {
  root: true,
  extends: ['@jadoo/eslint-config-custom'],
  parserOptions: {
    project: path.join(__dirname, 'tsconfig.json'),
  },
  overrides: [
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
    },
  ],
};
