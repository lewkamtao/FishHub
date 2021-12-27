module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  globals: {
    defineProps: "readonly",
  },
  parserOptions: {
    parser: "babel-eslint",
  },
  extends: ["airbnb", "prettier"],
  plugins: ["vue"],
  // add your custom rules here
  rules: {},
};
 