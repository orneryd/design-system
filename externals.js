const path = require('path')
const glob = require('glob')

module.exports = existingExternals => {
  existingAliases = existingExternals || []
  return glob.sync(path.resolve(__dirname, 'packages') + '/**/src/*.js').reduce((acc, filePath) => {
    const entry = filePath.replace(/.+\/src\/(.+?)\.js$/i, (m, cg1) => cg1)
    if (entry.indexOf('.test') === -1 && entry.indexOf('dist/') === -1) {
      acc.push(`@mcklabs/${entry}`)
    }
    return acc
  }, existingAliases)
}
