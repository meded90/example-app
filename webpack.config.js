var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');
var path = require('path');

module.exports = {
    entry: './server/index.js',
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
};
