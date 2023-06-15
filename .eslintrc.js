module.exports = {
  root: true,
  extends: ['@jadoo/eslint-config-custom'],
  settings: {
    next: {
      rootDir: ['apps/*/', 'packages/*/'],
    },
  },
};
