var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',//生成Source Maps,这里选择eval-source-map
  entry: path.resolve(__dirname, './app/main.js'),
  output: {
    path: path.resolve(__dirname, '/build'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)?$/,
      loader: 'babel-loader'
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }, {
      test: /\.less$/,
      loader: 'style!css!less'
    },{
      test: /\.(png|jpg)$/,
      loader: 'url?limit=25000'
    }]
  },

  devServer: {
    contentBase: __dirname + '/build',
    openPage: 'build/',
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({template: './app/index.html'})
  ],
};
