#!/usr/local/bin/node

const path = require('path')
const fs = require('fs')
const jsdoc2md = require('jsdoc-to-markdown')

fs.readdir(__dirname, function(err, items) {
  console.log(items)

  for (var i = 0; i < items.length; i++) {
    const itemPath = path.resolve(__dirname, items[i])
    if (fs.statSync(itemPath).isDirectory()) {
      let template = ''
      const hbsTemplatePath = path.resolve(itemPath, 'README.hbs')
      if (fs.existsSync(hbsTemplatePath)) {
        template = fs.readFileSync(hbsTemplatePath, 'utf8')
      }
      jsdoc2md
        .render({
          files: `${itemPath}/src/**/*.js`,
          template
        })
        .then(content =>
          fs.writeFileSync(path.resolve(itemPath, 'README.md'), content, { encoding: 'utf8' })
        )
    }
  }
})
