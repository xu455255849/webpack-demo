const merge = require('webpack-merge');
const common = require('./base');
const webpack = require('webpack');


module.exports =  merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: '../dist',
        hot: true,
        port: 9000
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
});
