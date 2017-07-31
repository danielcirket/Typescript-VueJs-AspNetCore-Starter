const helpers = require("./helpers"),
  webpackConfig = require("./webpack.config.base"),
  DefinePlugin = require('webpack/lib/DefinePlugin'),
  env = require('../environment/dev.env'),
  querystring = require('querystring');

webpackConfig.devServer = {
  port: 8080,
  host: "localhost",
  historyApiFallback: true,
  watchOptions: {aggregateTimeout: 300, poll: 1000},
  contentBase: './app/src',
  open: true,
  openPage: ''
};



webpackConfig.plugins = [...webpackConfig.plugins,
  new DefinePlugin({
    'process.env': env
  })
]

console.log('config: ', JSON.stringify(webpackConfig));

module.exports = webpackConfig;
