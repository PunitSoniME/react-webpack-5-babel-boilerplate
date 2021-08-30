const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.tsx'
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, "../", 'build')
    },
    module: {
        rules: [
            {
                test: /\.s?(css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    // 'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: "babel-loader"
                    },
                    {
                        loader: "react-svg-loader",
                        options: {
                            jsx: true // true outputs JSX tags
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                loader: 'file-loader',
                options: {
                    publicPath: 'assets',
                    name: '[name].[ext]',
                    outputPath: 'assets'
                }
            },
            {
                loader: 'babel-loader',
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            minify: {
                removeAttributeQuotes: true,
                collapseWhitespace: true,
                removeComments: true
            }
        }),
        new CssMinimizerPlugin(),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({ filename: "[name].[fullhash].css" }),
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
};

// const path = require("path");
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
// const WebpackBundleAnalyzer = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

// module.exports = {
//     entry: {
//         app: path.resolve(__dirname, '..', './src/index.tsx')
//     },
//     resolve: {
//         extensions: [".ts", ".tsx", ".js", ".jsx"]
//     },
//     module: {
//         rules: [
//             //  typescript rule is added in dev and prod files
//             {
//                 test: /\.s?(css)$/,
//                 use: [
//                     MiniCssExtractPlugin.loader,
//                     // 'style-loader',
//                     'css-loader',
//                     'sass-loader'
//                 ]
//             },
//             {
//                 test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
//                 type: "asset/resource"
//             },
//             {
//                 test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
//                 type: "asset/inline"
//             }
//         ]
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             template: path.resolve(__dirname, '..', './public/index.html'),
//             minify: {
//                 removeAttributeQuotes: true,
//                 collapseWhitespace: true,
//                 removeComments: true
//             }
//         }),
//         new CssMinimizerPlugin(),
//         new CleanWebpackPlugin(),
//         new MiniCssExtractPlugin({ filename: "[name].[fullhash].css" }),
//         new WebpackBundleAnalyzer()
//     ],
//     output: {
//         path: path.resolve(__dirname, '..', './build'),
//         filename: 'bundle.js',
//     },
//     devServer: {
//         port: 3010,
//         contentBase: './build',
//         historyApiFallback: true,
//         hot: true
//     }
// }