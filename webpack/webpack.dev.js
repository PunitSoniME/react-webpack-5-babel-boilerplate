const path = require('path');
const WebpackBundleAnalyzer = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
    mode: 'development',
    // plugins: [
    //     new WebpackBundleAnalyzer()
    // ],
    devServer: {
        port: 3000,
        historyApiFallback: true,
        hot: true
    }
};