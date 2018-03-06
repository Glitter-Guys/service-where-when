const path = require('path');

module.exports = {
  mode: 'development',
  entry: './client/src/app.js',
  output: {
    path: path.resolve(__dirname, './client/dist/build/'),
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
      {
        test: /\.css$/,
        loader: 'style-loader',
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]',
        },
      },
    ],
  },
  stats: {
    colors: true,
  },
  devtool: 'source-map',
};
