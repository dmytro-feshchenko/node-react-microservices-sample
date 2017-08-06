var webpack = require('webpack');
const path = require('path');

const contextPath = path.resolve(__dirname, 'src');
const buildPath = path.resolve(__dirname, 'public', 'build');

var config = {
    context: contextPath,
    entry: {
        app: './index.js'
    },
    output: {
        path: buildPath, // `dist` is the destination
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        'react',
                        'es2015',
                        'stage-2'
                    ],
                    plugins: []
                },
                exclude: /node_modules/,
                // include: [
                //     path.resolve(__dirname, '/src/main/resources/static')
                // ]
            },
            {
                test: /\.js$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            // 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
            'process.ENV.NODE_ENV': JSON.stringify('development')
        })
    ],
    resolve: {
        modules: [
            path.join(process.cwd(), 'src'),
            'node_modules'
        ],
        extensions: [ '*', '.js', '.json']
    },
    devServer: {
        port: 9090,
        proxy: {
            '/': {
                target: 'http://localhost:8080',
                secure: false,
                // node-http-proxy option - don't add /localhost:8080/ to proxied request paths
                prependPath: false
            }
        },
        publicPath: 'http://localhost:9090/'
    },
    devtool: 'source-map'
};

module.exports = config;