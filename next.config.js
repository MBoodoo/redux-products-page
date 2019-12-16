const withSass = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");

const { resolve } = require("path");

module.exports = withCSS(withSass({}));
