/**
 * Created by Skipper on 2017/3/14.
 */

const path = require('path'); // 导入路径包
// const HtmlWebpackPlugin = require('html-webpack-plugin');

//定义一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
  // entry: "./app/index.js", // 入口文件
  // entry: "./app/root.js", // 入口文件
  entry: "./app/index02.js", // 入口文件
  // entry: APP_PATH, // 入口文件

  // 输出文件 build下的bundle.js
  output: {
    // path: path.resolve(BUILD_PATH, 'build'),
    path: BUILD_PATH,
    filename: "bundle.js"
  },

  // 使用loader模块
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        include: APP_PATH
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=40000'
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: APP_PATH,
        query: {
          presets: ["react",'es2015']
        }
      },
    ]
  },
  // plugins: [new HtmlWebpackPlugin({
  //   title:'Hello World'
  // })]
};