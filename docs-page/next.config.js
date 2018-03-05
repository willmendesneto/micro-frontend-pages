const webpack = require('webpack');
const withCSS = require('@zeit/next-sass');
const path = require('path')
const glob = require('glob')

require('dotenv').config();

module.exports = withCSS({
  sassLoaderOptions: {
    includePaths: ['node_modules']
  },
  webpack(config, options) {
    config.plugins.push(
      new webpack.EnvironmentPlugin(['API_URL', 'API_KEY'])
    );

    return config;
  }
});