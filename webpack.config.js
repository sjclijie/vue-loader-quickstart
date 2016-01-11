
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var webpack = require('webpack');

var entry = {
    //'lib/zepto': 'webpack-zepto',
    'bootstrap': './src/bootstrap.js',
    'components/title': './src/components/title/index.js',
    'components/test': './src/components/test/index.js',
};

//var ignoreFiles = new webpack.IgnorePlugin(/zepto/);

module.exports = {

    entry: entry,

    output: {
        path: './dist/',
        publicPath: '/dist/',
        filename: '[name].js'
    },

    module: {
        loaders: [
            { test: /\.vue$/, loader: 'vue' },
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
            //{ test: /zepto(\.min)?/, loader: "exports?Zepto; delete window.$; delete window.Zepto;" }
        ]
    },

    resolve: {
        extension: ['', '.js'],                               //require('module')时省略的扩展名
        alias: {
            //'jquery': __dirname + '/bower_components/jquery/dist/jquery.min',
            //'zepto': __dirname + '/bower_components/zepto/zepto.min'
        }
    },

    /*
    externals: {
        //'Zepto': 'window.'
    },*/

    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common/vue.js'),    //提取公用
        /*new webpack.optimize.UglifyJsPlugin({                 //压缩
            compress : {
                warnings : false
            },
            mangle: {
                except: ['$super', '$', 'exports', 'require']  //不压缩这些关键字
            }
        }),*/
        //new webpack.optimize.OccurenceOrderPlugin(),         //优化id
        new ExtractTextPlugin('[name].css'),                 //提取css
        //new webpack.IgnorePlugin(/zepto(\.min)?/)
        /*new HtmlWebpackPlugin({                              //文件内容替换
            title: 'Vue 学习demo',
            template: 'tpl.html'
        })
        new webpack.ProvidePlugin({
            $: 'webpack-zepto'
        })*/
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
    },
    //devtool: '#source-map',
    devServer: {
        noInfo: true
    }
};


/**

    webpack 加载外部库的三种方式

    一. load via <script> tag

        1. <script src='/path/to/jquery.min.js'></script>
        2. externals: {jquery: 'jQuery'}
        3. var $ = require('jquery');

    二. with library included in bundle

        1. copy `jquery.min.js` to your local filesystem.
        2. make `jquery` resolve to your local copy of the library
            resolve: { alias: { jquery: '/path/to/jquery.min' } }
        3. var $ = require('jquery');

    三. with `ProviderPlugin`  every time

        1. Plugins: [ new webpack.ProviderPlugin( { "_": 'underscore' } ) ]

        2. underscore is automatically required
            _.size( [...] )

 */