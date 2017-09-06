var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',//生成Source Maps,这里选择eval-source-map
  entry: path.resolve(__dirname, './app/main.js'),
  output: {
    path: path.resolve(__dirname, '/build'),
    filename: 'bundle-[hash].js',
  },
  resolve: {
    extensions: ["less", ".js", ".jsx"] //resolve.extensions 用于指明程序自动补全识别哪些后缀,
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)?$/,
      exclude: "/node_modules/",
      loader: 'babel-loader'
    }, {
      test: /\.css$/,
      exclude: "/node_modules/",
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
    }, {
      test: /\.less$/,
      exclude: "/node_modules/",
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'less-loader']
      })
    },{
      test: /\.(png|jpg)$/,
      exclude: "/node_modules/",
      loader: 'url?limit=25000'
    }]
  },

  devServer: {
    contentBase: path.resolve(__dirname, '/build'),
    openPage: 'build/',
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
  },

  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      'React' : 'react',
      'ReactDOM': 'react-dom',
      _: "underscore",
    }),
    new webpack.optimize.UglifyJsPlugin({
      mangle: { // 排除不想要压缩的对象名称
        except: ['$super', '$', 'exports', 'require', 'module', '_']
      },
      output: {
        comments: false,  // remove all comments
      },
      compress: {
        warnings: false
      }
    }),
    new HtmlWebpackPlugin({template: './app/index.html'}),
    new ExtractTextPlugin("bundle.css")
  ],
};
