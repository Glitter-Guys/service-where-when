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
    ],
  },
  stats: {
    colors: true,
  },
  devtool: 'source-map',
};
