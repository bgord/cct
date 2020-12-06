module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "imprv",
        "chore",
        "docs",
        "refactor",
        "style",
        "test",
        "revert",
      ],
    ],
    "scope-enum": [2, "always", ["release", "model", "api", "ui"]],
  },
};
