module.exports = {
  env: {
    es6: true,
    jest: true,
    browser: true
  },
  extends: ["airbnb", "prettier", "prettier/react"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    __DEV__: true
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module",
    allowImportExportEverywhere: true,
  },
  plugins: ["react", "jsx-a11y", "import", "react-hooks", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx"] }],
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "react/jsx-one-expression-per-line": "off",
    "global-require": "off",
    "react-native/no-raw-text": "off",
    "no-param-reassign": "off",
    "no-underscore-dangle": "off",
    camelcase: "off",
    "no-console": ["error", { allow: ["tron"] }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-props-no-spreading": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/control-has-associated-label": "off",
    "consistent-return": "off",
    "jsx-a11y/anchor-is-valid": 0,
    "no-console": "off"
  },
  settings: {
    "import/resolver": {
      "babel-plugin-root-import": {
        rootPathSuffix: "src"
      },
    },
  },
};
