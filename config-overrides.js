const { addBabelPlugin } = require('customize-cra');

module.exports = {
   webpack: addBabelPlugin([
      'babel-plugin-root-import',
      {
         rootPathSuffix: 'src',
      },
   ]),
   jest: config => {
      config.roots = ['<rootDir>/__tests__'];
      config.testMatch = [
         '<rootDir>/__tests__/**/*.{js,jsx}',
         '<rootDir>/__tests__/**/?(*.)(spec|test).{js,jsx}',
      ];
      return config;
   },
};
