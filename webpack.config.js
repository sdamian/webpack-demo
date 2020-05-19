const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        app: './src/app.js',
        admin: './src/admin/admin.ts'
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            webp: {
                                method: 6,
                                size: 250000
                            }
                        },
                    },
                ],
            },
            {
                test: /\.tsx?$/,
                use: ['ts-loader']
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Demo Site',
            chunks: ['app'],
        }),
        new HtmlWebpackPlugin({
            chunks: ['admin'],
            filename: 'admin.html',
            templateContent: `
                <html>
                <body>
                    <app></app>
                </body>
                </html>
            `
        }),
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: 'commons',
                    chunks: 'initial',
                    minChunks: 2
                }
            }
        }
    }
};