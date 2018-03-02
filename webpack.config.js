const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './client/app.js',
  output: {
    path: path.resolve(__dirname, './client/build'),
    filename: 'app.bundle.js',
    publicPath: './',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
  stats: {
    colors: true,
  },
  devtool: 'source-map',
};
