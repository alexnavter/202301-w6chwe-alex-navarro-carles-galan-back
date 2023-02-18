module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["xo", "prettier"],
  overrides: [
    {
      extends: ["xo-typescript", "prettier"],
      files: ["*.ts"],
      rules: { "@typescript-eslint/consistent-type-definitions": "off" },
    },
    {
      files: ["src/**/models/**/*.ts"],
      rules: {
        "@typescript-eslint/naming-convention": "off",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-implicit-coercion": "off",
  },
};