const path = require("path");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");
const merge = require("webpack-merge");
const ExtractPlugin = require("extract-text-webpack-plugin");
const baseConfig = require("./webpack.config.base");

const isDev = process.env.NODE_ENV === 'development';
let config;

let defaultPlugins =  [
  // make sure to include the plugin!
  new webpack.DefinePlugin({
      'process.env': {
          NODE_ENV: isDev ? '"development"' : '"production"'
      }
  }),
  new VueLoaderPlugin(),
  new HtmlWebpackPlugin()
];
if (isDev) {
  config = merge(baseConfig, {
    entry: {
      app: path.join(__dirname, "../client/index.js"),
      vendor: ['vue']
    },
    output: {
      filename: '[name].[hash:8].js',
      path: path.join(__dirname, "../dist")
    },
    devtool: "#cheap-module-eval-source-map",
    devServer: {
      port: 8000,
      host: '0.0.0.0',
      overlay: {
        errors: true,
      },
      hot: true,
      //启动npm run dev的是否打开浏览器
      open: true
    },
    module: {
      rules: [
        {
          test: /\.styl/,
          use: [
            'vue-style-loader',
            'css-loader',
            {
              loader: "postcss-loader",
              options: {
                sourceMap: true
              }
            },
            'stylus-loader'
          ]
        }
      ]
    },

    plugins:defaultPlugins.concat([
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    ])
  })

} else {
  config = merge(baseConfig, {
    output: {
      filename: '[name].[chunkhash:8].js'
    },
    module: {
      rules: [
        {
          test: /\.styl/,
          use: ExtractPlugin.extract({
            fallback: 'vue-style-loader',
            use: [
              'css-loader',
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true
                }
              },
              'stylus-loader'
            ]
          })
        }
      ]
    },
    plugins:defaultPlugins.concat([
      new ExtractPlugin('styles.[contenthash:8].css'),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor'
      }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'runtime'
      })
    ])
  })
}

module.exports = config;