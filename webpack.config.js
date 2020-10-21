const glob = require('glob')

const generateAliases = require('./alias')
const generateExternals = require('./externals')
const makeForCDN = process.env.NODE_ENV === 'production';
const packageJson = require('./package.json')

const versionedIndex = `/dist/ui-${packageJson.version}`;
module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: glob.sync('./packages/**/src/*.js').reduce(
    (acc, path) => {
      /**
       * The "[name]" placeholder in the "output" property will be replaced
       * with each key name in our "entry" object. We need to make sure the
       * keys are a path to the "index.js" file but without the actual file
       * name. This is why we replace the file name, "index.js", with a string
       */
      const entry = path.replace(/.+\/src\/(.+?)\.js$/i, (m, cg1) => cg1)
      /**
       * Here we start building our object by placing the "entry" variable from
       * the previous line as a key and the entire path including the file name
       * as the value
       */
      if (entry.indexOf('.test') === -1 && entry.indexOf('dist/') === -1) {
        const rootFolder = path.replace(`src/${entry}.js`, '');
        const { version } = require(`${rootFolder}/package.json`)
        const versionedEntry = `/dist/${entry}-${version}`;
        if (makeForCDN) {
          acc[versionedEntry] = path
          acc[versionedIndex].push(path)
        } else {
          acc[`${rootFolder}dist/${entry}`] = path
        }
      }
      return acc
    },
    makeForCDN ? { [versionedIndex]: [] } : {}
  ),
  output: {
    filename: '[name].js',
    path: __dirname,
    libraryTarget: 'commonjs'
  },
  devtool: 'source-map',
  performance: {
    hints: false
  },
  optimization: {
    usedExports: makeForCDN,
    minimize: makeForCDN
  },
  resolve: {
    extensions: ['*', '.js'],
    alias: generateAliases()
  },
  externals: makeForCDN ? [] : generateExternals([
    "@ornery/web-components",
    "@ornery/web-components/src/utils",
    "@ornery/web-components/templates"
  ]),
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
          'style-loader',
          'css-loader',
          'sass-loader' // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      },
      {
        test: /packages.+\.html$/,
        exclude: /node_modules/,
        use: [
          {
            loader: '@ornery/web-components/loader',
            options: {
              minimize: true,
              removeComments: true,
              collapseWhitespace: true,
              exportAsEs6Default: true,
              attrs: false,
              interpolate: false
            }
          }
        ]
      }
    ]
  }
}
