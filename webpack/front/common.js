const merge = require('webpack-merge')
const { cleanBuild, copyFiles, loadSVGs, setFreeVariable } = require('../parts')

module.exports = merge([
  {
    output: {
      filename: 'main.js',
    },

    resolve: {
      extensions: ['.js', '.jsx'],
    },
  },

  cleanBuild(),

  copyFiles([{ from: 'src/front/assets/favicon.ico' }]),

  loadSVGs(),

  setFreeVariable('__IS_SERVER__', false),
])
