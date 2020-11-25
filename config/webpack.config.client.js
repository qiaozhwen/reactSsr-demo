const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path  = require('path');
module.exports={
    entry: './src/entry-client.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: "static/js/[name].[chunkhash].js",
        publicPath: "http://localhost:9999/dist/"
    },
    module:{
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "index.html"
        })
    ]
};