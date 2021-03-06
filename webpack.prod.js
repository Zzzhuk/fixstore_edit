const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin'); //installed via npm
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const buildPath = path.resolve(__dirname, 'dist');

module.exports = {
    entry: {
        index: './src/index.js',
        vendor: ['swiper', 'jquery']
    },

    output: {
        filename: 'scripts/[name].js',
        path:  path.resolve(__dirname, 'dist')
    },
    node: {
        fs: 'empty'
    },
    module: {
        rules: [
            {
                test: /\.(scss|css|sass)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        // translates CSS into CommonJS
                        loader: 'css-loader',
                    },
                    // {
                    //     // Runs compiled CSS through postcss for vendor prefixing
                    //     loader: 'postcss-loader',
                    //     options: {
                    //         sourceMap: true
                    //     }
                    // },
                    {
                        // compiles Sass to CSS
                        loader: 'sass-loader',
                        options: {
                            outputStyle: 'expanded',
                        }
                    }
                ]
            },
            {
                // Load all images as base64 encoding if they are smaller than 8192 bytes
                test: /\.(ttf|eot|svg|woff)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'fonts/[name].[ext]',
                            limit: 8192,
                            // publicPath: path.resolve(__dirname, 'dist')
                        }
                    }
                ]
            },
            {
                // Load all images as base64 encoding if they are smaller than 8192 bytes
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'images/[name].[ext]',
                            limit: 8192,
                            // publicPath: path.resolve(__dirname, 'dist')
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            // Inject the js bundle at the end of the body of the given template
            inject: true
        }),
        new HtmlWebpackPlugin({
            template: './src/product.html',
            filename: "product.html",
            inject: true
        }),
        new HtmlWebpackPlugin({
            template: './src/services-catalog.html',
            filename: "services-catalog.html",
            inject: true
        }),new HtmlWebpackPlugin({
            template: './src/simple-page.html',
            filename: "simple-page.html",
            inject: true
        }),
        new CleanWebpackPlugin(buildPath),
        // new FaviconsWebpackPlugin({
        //     // Your source logo
        //    // logo: './src/assets/icons/icon.png',
        //     // The prefix for all image files (might be a folder or a name)
        //     prefix: 'icons',
        //     // Generate a cache file with control hashes and
        //     // don't rebuild the favicons until those hashes change
        //     persistentCache: true,
        //     // Inject the html into the html-webpack-plugin
        //     inject: true,
        //     // favicon background color (see https://github.com/haydenbleasel/favicons#usage)
        //     background: '#fff',
        //     // favicon app title (see https://github.com/haydenbleasel/favicons#usage)
        //     title: '{{projectName}}',
        //
        //     // which icons should be generated (see https://github.com/haydenbleasel/favicons#usage)
        //     icons: {
        //         android: true,
        //         appleIcon: true,
        //         appleStartup: true,
        //         coast: false,
        //         favicons: true,
        //         firefox: true,
        //         opengraph: false,
        //         twitter: false,
        //         yandex: false,
        //         windows: false
        //     }
        // }),
        new MiniCssExtractPlugin({
            filename: 'styles/style.css'
        }),
        new OptimizeCssAssetsPlugin({
            cssProcessor: require('cssnano'),
            cssProcessorOptions: {
                discardComments: {
                    removeAll: true
                }
            },
            canPrint: true
        }),
        new CopyWebpackPlugin([
            {from: 'public'}
        ])
    ]
};
