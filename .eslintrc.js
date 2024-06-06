module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:react/jsx-runtime",
    "prettier",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "i18next"],
  rules: {
    "react/jsx-filename-extension": [
      "error",
      { extensions: [".js", ".jsx", ".tsx"] },
    ],
    "import/no-unresolved": "off",
    "import/extensions": "off",
    "import/prefer-default-export": "off",
    "react/require-default-props": "off",
    "react/function-component-definition": "off",
    "react/jsx-props-no-spreading": "off",
    "react/button-has-type": "off",
    "no-promise-executor-return": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "no-redeclare": "off",
    "@typescript-eslint/no-redeclare": "error",
    "no-nested-ternary": "off",
    "import/no-extraneous-dependencies": "off",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "error",
    "no-underscore-dangle": "off",
    "i18next/no-literal-string": [
      "error",
      { markupOnly: true, onlyAttribute: [""] },
    ],
  },
  globals: {
    __IS_DEV__: true,
  },
};
