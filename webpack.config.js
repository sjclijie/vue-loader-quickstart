
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');




module.exports = {

    //entry: ['bootstrap', './main.js'],
    entry: {
        'bootstrap': './main.js'
    },

    output: {
        path: './dist/',
        filename: '[name].js'
    },

    module: {
        loaders: [
            { test: /\.vue$/, loader: 'vue' },
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ }
        ]
    },

    plugins: [
        //new webpack.optimize.CommonsChunkPlugin('basic.js'),
        //new ExtractTextPlugin('test.css')
    ],

    babel: {
        'presets': ['es2015', 'stage-0'],
        'plugins': ['transform-runtime']
    }
};