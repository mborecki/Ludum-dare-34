module.exports = {
    resolve: {
        root: __dirname + 'app/',
        extensions: ['.es6.js', '.js', '']
    },

    entry: {
        javascript: __dirname + '/app/js/main'
    },

    output: {
        path: __dirname + '/app/js/',
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.es6.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
}