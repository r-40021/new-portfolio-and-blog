const path = require('path');

module.exports = {
  context: __dirname + '/src/js',
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'assets/js'),
    filename: 'webpack.bundle.js'
  },
  mode: 'production',
  resolve: {
        extensions: ['.js']
    }
}