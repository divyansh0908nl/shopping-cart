const path = require('path');

module.exports = {
  root: true,
  extends: ['@jadoo/eslint-config-custom'],
  parserOptions: {
    project: path.join(__dirname, 'tsconfig.json'),
  },
};
