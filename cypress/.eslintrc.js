module.exports = {
  extends: [
    "plugin:cypress/recommended",
    "plugin:prettier/recommended",
    "prettier/react",
    "prettier/@typescript-eslint",
  ],
  rules: {
    promise: "off",
    // Allow for imports inside test configuration
    "import/no-extraneous-dependencies": "off",
    "functional/no-expression-statement": "off",
  },
}
