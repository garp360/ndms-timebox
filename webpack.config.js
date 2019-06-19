const merge = require("webpack-merge");
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const {
    VueLoaderPlugin
} = require('vue-loader');

var commonConfig = {
    //   entry: path.resolve(__dirname + '/src/TimeBox.vue'),
    output: {
        path: path.resolve(__dirname + '/dist/')
        // filename: 'ndms-timebox.js'
    },
    module: {
        rules: [{
                test: /\.js$/,
                loader: 'babel-loader',
                include: [path.join(__dirname, 'src')],
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    optimization: {
        minimizer: [
            // we specify a custom UglifyJsPlugin here to get source maps in production
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                uglifyOptions: {
                    compress: false,
                    ecma: 6,
                    mangle: true
                },
                sourceMap: true
            })
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
};

module.exports = [

    // Config 1: For browser environment
    merge(commonConfig, {
        entry: path.resolve(__dirname + '/src/plugin.js'),
        output: {
            filename: 'ndms-timebox.min.js',
            libraryTarget: 'window',
            library: 'NdmsTimeBox'
        }
    }),

    // Config 2: For Node-based development environments
    merge(commonConfig, {
        entry: path.resolve(__dirname + '/src/TimeBox.vue'),
        output: {
            filename: 'ndms-timebox.js',
            libraryTarget: 'umd',

            // These options are useful if the user wants to load the module with AMD
            library: 'ndms-timebox',
            umdNamedDefine: true
        }
    })
];