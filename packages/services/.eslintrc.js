module.exports = {
    root: true,
    extends: ['@jadoo/eslint-config-custom'],
    parseroptions: {    
        project: path.join(__dirname, 'tsconfig.json'),  
    },
  };