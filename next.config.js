const webpack = require("webpack");
console.log(webpack.version); //5.31.0

const withCSS = require('@zeit/next-css');
module.exports = withCSS();

module.exports = {
    future: {
      webpack5: true,
    },
    webpack: function (config, options) {
      config.experiments = {};
      return config;
    },
  };