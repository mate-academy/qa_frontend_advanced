module.exports = {
  extends: '@mate-academy/eslint-config-react',
  overrides: [
    {
      files: [
        "**/*.test.js"
      ],
      env: {
        jest: true
      },
      plugins: ["jest"],
      rules: {
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/prefer-to-have-length": "warn",
        "jest/valid-expect": "error"
      }
    }
  ]
};
