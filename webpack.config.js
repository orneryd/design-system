const glob = require('glob');

module.exports = {
    mode: process.env.NODE_ENV || 'development',
    entry: glob.sync('./packages/**/*.js').reduce((acc, path) => {
        /**
         * The "[name]" placeholder in the "output" property will be replaced
         * with each key name in our "entry" object. We need to make sure the
         * keys are a path to the "index.js" file but without the actual file
         * name. This is why we replace the file name, "index.js", with a string
         */
        const entry = path.replace(/.+\/src\/(.+?)\.js$/i, (m, cg1)=> cg1)
        /**
         * Here we start building our object by placing the "entry" variable from
         * the previous line as a key and the entire path including the file name
         * as the value
         */
        if (entry.indexOf('.test') === -1 && entry.indexOf('dist/') === -1) {
            acc[`/dist/${entry}`] = path
            acc[`${path.replace(`src/${entry}.js`, '')}/dist/${entry}`] = path
            acc['/dist/index'].push(path)
        }
        return acc
    }, {'/dist/index': []}),
    output: {
        filename: '[name].js',
        path: __dirname
    },
    devtool: 'source-map',
    performance: {
        hints: false
    },
    optimization: {
        minimize: false,
    },
    resolve: {
        extensions: ['*', '.js']
    },
    // tell webpack to run babel on every file type we want. how we transpile from es6 to regular js
    module: {
        rules: [
            {
                test: /packages\.js(x)?$/,
                exclude: [/node_modules/, /test\.js(x)?$/],
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            },
            {
                test: /packages.+\.html$/,
                exclude: /node_modules/,
                use: [{
                    loader: '@mcklabs/web-components/loader',
                    options: {
                        minimize: true,
                        removeComments: true,
                        collapseWhitespace: true,
                        exportAsEs6Default: true,
                        attrs: false,
                        interpolate: false
                    }
                }]
            }
        ]
    }
};
