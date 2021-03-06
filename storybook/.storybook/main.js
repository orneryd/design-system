const generateAliases = require('../../alias')

module.exports = {
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-storysource',
    '@storybook/addon-knobs',
    '@storybook/addon-a11y',
    '@storybook/addon-docs'
  ],
  preset: ['@storybook/addon-docs/preset'],
  stories: ['../src/**/*.stories.jsx', '../src/**/*.stories.mdx'],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.resolve = config.resolve || {}
    config.resolve.extensions = config.resolve.extensions || ['*', '.js', '.md', '.jsx', '.mdx'],
    config.resolve.alias = config.resolve.alias || {},
    config.resolve.alias = generateAliases(config.resolve.alias)
    config.module.rules.push({
        test: /packages.+\.html$/,
        exclude: /node_modules/,
        use: [{
            loader: '@ornery/web-components/loader',
            options: {
                minimize: true,
                removeComments: true,
                collapseWhitespace: true,
                exportAsEs6Default: true,
                attrs: false,
                interpolate: false
            }
        }]
    });

    // Return the altered config
    return config;
  }
}
