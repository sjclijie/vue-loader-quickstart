
module.exports = {

    entry: './main.js',

    output: {
        path: './dist/',
        publicPath: 'dist',
        filename: 'build.js'
    },

    module: {
        loaders: [
            { test: /\.vue$/, loader: 'vue' },
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
        ]
    },

    babel: {
        'presets': ['es2015', 'stage-0'],
        'plugins': ['transform-runtime']
    }
};