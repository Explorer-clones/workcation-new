module.exports = {
  extends: [
    "plugin:unicorn/recommended",
    "plugin:react/recommended",
    "plugin:promise/recommended",
    "plugin:functional/recommended",
    "plugin:prettier/recommended",
    "prettier/react",
    "prettier/@typescript-eslint",
  ],
  rules: {
    "prettier/prettier": "error",
    "react/prop-types": "off",
    "import/prefer-default-export": "off",
    "react/jsx-filename-extension": "off",
    // Common abbreviations are known and readable
    "unicorn/prevent-abbreviations": "off",
    // Too restrictive for the start
    "functional/functional-parameters": "off",
    // Only warn about loops
    "functional/no-loop-statement": "warn",
    // Too restrictive for the start
    "functional/no-mixed-type": "off",
    // Too restrictive for react setup
    "functional/no-return-void": "off",
  },
}
