const path = require('path');
const webpack = require("webpack");
module.exports={
    entry: './src/entry-server.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: "entry-server.js",
        libraryTarget: "commonjs2"
    },
    target: "node",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env.REACT_ENV": JSON.stringify("server")  // 指定React环境为服务端
        })
    ]
};