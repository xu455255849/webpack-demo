const merge = require('webpack-merge');
const common = require('./base');
const webpack = require('webpack');

module.exports =  merge(common, {
  //  devtool: 'inline-source-map',
    optimization: {
        runtimeChunk: {
            name: 'manifest'
        },
        splitChunks:{
            chunks: 'async',
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            name: false,
            cacheGroups: {
                vendor: {
                    name: 'vendor',
                    chunks: 'initial',
                    priority: -10,
                    reuseExistingChunk: false,
                    test: /node_modules\/(.*)\.js/
                },
                styles: {
                    name: 'styles',
                    test: /\.(scss|css)$/,
                    chunks: 'all',
                    minChunks: 1,
                    reuseExistingChunk: true,
                    enforce: true
                }
            }
        }
    },
    devServer: {
        contentBase: '../dist',
        port: 9000
    },
    plugins: [
        //new webpack.HotModuleReplacementPlugin()
    ]
});
