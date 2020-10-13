module.exports = {
  displayName: '@ornery/design-system',
  roots: ['<rootDir>/packages'],
  setupFiles: ['<rootDir>/test/polyfills.js'],
  testEnvironment: 'jest-environment-happy-dom',
  collectCoverageFrom: ['<rootDir>/packages/**/*.js'],
  testMatch: [
    '<rootDir>packages/**/*.{spec,test}.js'
  ],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.scss$': '<rootDir>/test/config/cssTransform.js',
    '^.+\\.html$': '@ornery/web-components/jestLoader'
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js)$',
    '^.+\\.module\\.(css|sass|scss)$'
  ],
  modulePaths: [
    '<rootDir>/node_modules'
  ],
  moduleNameMapper: {
    "@ornery/(.+)$": '<rootDir>/packages/$1',
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy'
  },
  moduleFileExtensions: [
    'web.js',
    'js',
    'web.ts',
    'ts',
    'json',
    'node'
  ],
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname']
}