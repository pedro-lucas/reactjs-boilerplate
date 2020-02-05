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
         '<rootDir>/__tests__/(*.)(spec|test).{js,jsx}',
         '<rootDir>/__tests__/**/(*.)(spec|test).{js,jsx}',
      ];
      config.moduleDirectories = ['node_modules', 'src'];
      config.moduleNameMapper = {
         '^~/(.*)': '<rootDir>/src/$1',
      };
      return config;
   },
};
