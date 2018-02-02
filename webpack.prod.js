const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CnameWebpackPlugin = require('cname-webpack-plugin');

module.exports = merge(common, {
  module: {
    rules: [{
      test: /\.css$/,
      use: ExtractTextPlugin.extract([
        {
          loader: 'css-loader',
          options: {
            minimize: true
          }
        },
        'postcss-loader'
      ])
    },{
      test: /\.scss$/,
      use: ExtractTextPlugin.extract([
        {
          loader: 'css-loader',
          options: {
            minimize: true
          }
        },
        'postcss-loader',
        'sass-loader'
      ])
    }]
  },

  plugins: [
    /* 抽取出所有通用的部分 */
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'commons', //不能与entry的名字相同
    //   filename: '[name]/bundle.js',
    //   minChunks: 2 //至少2个chunk相同，就执行抽取
    // }),

    /* 抽取出chunk的css */
    new ExtractTextPlugin('bundle.css'),
    new UglifyJSPlugin({}),
    new CnameWebpackPlugin({
      domain: 'www.likezheng.org',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
});
