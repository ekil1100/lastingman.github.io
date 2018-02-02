const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'inline-source-map',

  module: {
    rules: [{
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            sourceMap: true
          }
        },
        'postcss-loader'
      ]
    },{
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            sourceMap: true
          }
        },
        'postcss-loader',
        'sass-loader'
      ]
    }]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],

  devServer: {
    contentBase: path.resolve(__dirname, 'docs'),
    compress: true,
    hot: true,
    inline: true,
    host: 'localhost',
    port: 3000,
    watchContentBase: false,
  }
});
