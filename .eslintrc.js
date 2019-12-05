module.exports = {
  root: true,
  extends: "airbnb-base",
  parser: "babel-eslint",
  env: {
    node: true,
    jest: true
  },
  rules: {
    "no-console": process.env.NODE_ENV !== "production" ? 0 : 2
  }
};