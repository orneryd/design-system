const path = require('path')
const glob = require('glob')

module.exports = existingAliases => {
  existingAliases = existingAliases || {}
  return glob.sync(path.resolve(__dirname, 'packages') + '/**/src/*.js').reduce((acc, filePath) => {
    const entry = filePath.replace(/.+\/src\/(.+?)\.js$/i, (m, cg1) => cg1)
    if (entry.indexOf('.test') === -1 && entry.indexOf('dist/') === -1) {
      acc[`@mcklabs/${entry}`] = filePath
      acc[`@mcklabs/${entry}-readme`] = path.resolve(filePath, '../../README.md')
    }
    return acc
  }, existingAliases)
}
