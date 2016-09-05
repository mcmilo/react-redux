'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var PATHS = {
  app: path.resolve(__dirname, 'app'),
  build: path.resolve(__dirname, 'build'),
  entry: './app/index.js'
};

var config = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    'babel-polyfill',
    PATHS.entry
  ],
  output: {
    path: PATHS.build,
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loaders: ['eslint'],
        include: PATHS.app,
        exclude: [/node_modules/, /app\/vendor/]
      }
    ],
    loaders: [
      {
        test: /.js$/,
        loader: 'babel-loader',
        include : PATHS.app
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      ENV: JSON.stringify('DEVELOP')
    })
  ],
  resolve: {
    extensions: ["", ".js", ".jsx"]
  }
};

module.exports = config;