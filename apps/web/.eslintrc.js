const path = require('path');

module.exports = {
  root: true,
  extends: ['@jadoo/eslint-config-custom'],
  plugins: ['testing-library'],
  parserOptions: {
    project: path.join(__dirname, 'tsconfig.json'),
  },
  overrides: [
    // Only uses Testing Library lint rules in test files
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
    },
  ],
  ignorePatterns: ['charts/*'],
};
