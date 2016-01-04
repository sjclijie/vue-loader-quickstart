
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var webpack = require('webpack');

var entry = {
    'bootstrap': './main.js',
    'components/title': './components/title/index.js',
    'components/test': './components/test/index.js',
};

module.exports = {

    entry: entry,

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
        new webpack.optimize.CommonsChunkPlugin('vue.js'),    //提取公用
        new webpack.optimize.UglifyJsPlugin({                 //压缩
            compress : {
                warnings : false
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin(),         //优化id
        new ExtractTextPlugin('[name].css'),
    ],
    babel: {
        'presets': ['es2015', 'stage-0'],
        'plugins': ['transform-runtime']
    },
    vue: {
        loaders: {
            css: ExtractTextPlugin.extract('css'),
            less: ExtractTextPlugin.extract('css!less'),
            sass: ExtractTextPlugin.extract('css!sass')
        },
        autoprefixer: {
            browsers: ['last 2 versions']
        }
    }
};