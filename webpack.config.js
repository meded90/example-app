var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');
var path = require('path');

module.exports = [{
    entry: './server/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'server.bundle.js',
    },
    module: {
        loaders: [{
            test: /\.js[x]?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ["es2015", "stage-0", "react"]
            }
        }]
    },
    target: 'node',
    node: {
        __dirname: true,
        __filename: true,
    },
    externals: [nodeExternals()],
    resolve: {
        extensions: ['.js', '.jsx']
    },
}, {
    entry: {
        square:'./client/square.jsx',
        todo:'./client/todo.jsx'
    },
    output: {
        path: path.resolve(__dirname, 'public/js'),
        libraryTarget: 'this',
        library: '__init__',
        filename: '[name].bundle.js',
    },
    module: {
        loaders: [{
            test: /\.js[x]?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ["es2015", "stage-0", "react"]
            }
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devtool: 'source-map'
}];
