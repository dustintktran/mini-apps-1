var webpack = require('webpack');

module.exports = options => {
  return {
    entry: './client/src',
    output: {
      filename: './client/dist/bundle.js',
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      rules: [
          {
              test: /\.js$/,
              loader: 'babel-loader',
              query: {
                  presets: ['es2015']
              }
          }
      ]
  }
  }
}