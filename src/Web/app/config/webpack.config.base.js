const helpers = require("./helpers"),
  CopyWebpackPlugin = require('copy-webpack-plugin');

//const ifdef = querystring.encode({json: JSON.stringify(env)});

let config = {
  entry: {
    "main": helpers.root("app/src/main.ts")
  },
  output: {
    filename: "[name].js",
    path: helpers.root("/wwwroot/assets/")
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".js", ".html"],
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  module: {
    rules: [
      {test: /\.ts$/, exclude: /node_modules/, enforce: 'pre', loader: 'tslint-loader'},
      {test: /\.ts$/, exclude: /node_modules/, loader: "awesome-typescript-loader"},
      //{test: /\.ts$/, exclude: /node_modules/, loader: `ifdef-loader?${ifdef_query}`},
      {test: /\.html$/, loader: 'raw-loader', exclude: ['./src/index.html']}
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'app/src/assets', to: './' },
      { from: 'app/src/css/main.css', to: './css' }
    ]),
  ]
};

module.exports = config;
