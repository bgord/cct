module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "improvement",
        "chore",
        "docs",
        "refactor",
        "style",
        "test",
        "revert",
      ],
    ],
  },
};
