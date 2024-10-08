module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:react/jsx-runtime",
    "prettier",
    "plugin:prettier/recommended",
    "plugin:react-hooks/recommended",
    "plugin:storybook/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react",
    "@typescript-eslint",
    "i18next",
    "react-hooks",
    "blog-project",
    "unused-imports",
  ],
  rules: {
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".js", ".jsx", ".tsx"],
      },
    ],
    "import/no-unresolved": "off",
    "import/extensions": "off",
    "import/prefer-default-export": "off",
    "react/require-default-props": "off",
    "react/function-component-definition": "off",
    "react/jsx-props-no-spreading": "off",
    "react/button-has-type": "off",
    "no-promise-executor-return": "off",
    // "no-unused-vars": "off",
    // "@typescript-eslint/no-unused-vars": [
    //   "error",
    //   { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    // ],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "no-redeclare": "off",
    "@typescript-eslint/no-redeclare": "error",
    "no-nested-ternary": "off",
    "import/no-extraneous-dependencies": "off",
    "no-shadow": "off",
    "no-underscore-dangle": "off",
    "i18next/no-literal-string": [
      "error",
      {
        markupOnly: true,
        onlyAttribute: ["text"],
      },
    ],
    "no-console": [
      "error",
      {
        allow: ["warn", "error", "info"],
      },
    ],
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "no-param-reassign": "off",
    "consistent-return": "off",
    "no-empty": [
      "error",
      {
        allowEmptyCatch: true,
      },
    ],
    "react/prop-types": "off",
    "react/no-unused-prop-types": "off",
    "react/no-array-index-key": "off",
    "@typescript-eslint/no-shadow": "off",
    "default-param-last": "off",
    "react/jsx-no-useless-fragment": "off",
    "blog-project/path-checker": [
      "error",
      {
        alias: "@",
      },
    ],
    "blog-project/public-api-imports": [
      "error",
      {
        alias: "@",
        testFilesPatterns: [
          "**/*.test.*",
          "**/*.stories.*",
          "**/StoreDecorator.tsx",
        ],
      },
    ],
    "blog-project/layers-import": [
      "error",
      {
        alias: "@",
        ignoreImportPatterns: ["**/StoreProvider", "**/testing"],
      },
    ],
  },
  globals: {
    __IS_DEV__: true,
    __API_BASE_URL__: true,
    __PROJECT__: true,
    DeepRequired: true,
  },
  overrides: [
    {
      files: ["**/src/**/*.{test,stories}.{ts,tsx}"],
      rules: {
        "i18next/no-literal-string": "off",
      },
    },
  ],
};
