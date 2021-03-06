'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpack = require('html-webpack-plugin');
const ChunkWebpack = webpack.optimize.CommonsChunkPlugin;

const rootDir = path.resolve(__dirname, '..');

module.exports = {
    debug: true,
    devtool: 'source-map',
    devServer: {
        contentBase: path.resolve(rootDir, 'dist'),
        historyApiFallback: true,
        port: 9000
    },
    entry: {
        app: [path.resolve(rootDir, 'src', 'bootstrap')],
        vendor: [path.resolve(rootDir, 'src', 'vendor')]
    },
    module: {
        loaders: [
            { loader: 'raw', test: /\.(css|html)$/ },
            { loaders: ['raw', 'sass'], test: /\.scss$/ },
            { exclude: /node_modules/, loader: 'ts', test: /\.ts$/ }
        ]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(rootDir, 'dist')
    },
    plugins: [
        new ChunkWebpack({
            filename: 'vendor.bundle.js',
            minChunks: Infinity,
            name: 'vendor'
        }),
        new HtmlWebpack({
            filename: 'index.html',
            inject: 'body',
            template: path.resolve(rootDir, 'src', 'index.html')
        })
    ],
    resolve: {
        extensions: ['', '.js', '.ts']
    }
};