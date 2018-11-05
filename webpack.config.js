const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");


const vendor_lib = [
    "bootstrap",
    "jquery",
    "popper.js",
    "react",
    "react-dom",
    "parallax-js",
    "@fortawesome/fontawesome-free"
]

const devServer = {
    port: 3500,
    open: true,
    historyApiFallback: true // enable router admin
}

module.exports = {
    entry: {
        bundle: './src/index.js',
        vendor: vendor_lib
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].[chunkhash].js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_module/,
                loader: 'babel-loader',
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    "css-loader",
                    "sass-loader"
                ],
            },
            {
                test: /\.(png|jpg|gif|jpeg|svg)$/,
                use: [
                    {
                       loader: 'file-loader',
                       options: {
                            name: '[name].[ext]',
                            outputPath: 'images',
                            publicPath: 'images'
                       }
                    }
                ],
            },
            {
                test: /\.(woff(2)?|ttf|eot|wav|mp3|ico)$/,
                use: [
                    {
                       loader: 'file-loader',
                       options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts',
                            publicPath: 'fonts'
                       }
                    }
                ],
            },
        ],
    },

    optimization: {
        // Cache vendor
        splitChunks: {
          cacheGroups: {
            vendors: {
              chunks: "all",
              test: /[\\/]node_modules[\\/]/,
              name: 'vendor',
              enforce: true
            },
          }
        },
        // File nao co su thay doi moi bundle lai
        runtimeChunk: {
            name: "manifest",
        },
        // minify inline css
        minimizer: [
            new UglifyJsPlugin({
              cache: true,
              parallel: true,
            }),
            new OptimizeCSSAssetsPlugin({})
          ]
    },
  
    plugins: [
        // parse template duoi khac thanh HTML
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        // Extract CSS ra khoi bundle thanh file rieng
        new MiniCssExtractPlugin({
            chunkFilename: "[name].[hash].css",
        }),
        // Khai bao cu phap su dung cac thu vien
        new webpack.ProvidePlugin({
            '$':'jquery',
            'jQuery':'jquery',
            'window.$':'jquery',
            'window.jQuery':'jquery',
        }),
    ],
    devServer
}