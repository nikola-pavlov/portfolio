const path = require('path');

module.exports = {
  entry: {
    app: './public/assets/scripts/App.js'
  },
  output: {
    filename: 'App.js',
    path: path.resolve(__dirname, './public/temp/scripts')
  }
};