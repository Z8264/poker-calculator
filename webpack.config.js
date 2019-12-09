const path = require('path');

module.exports = {
  entry: {
    app: './lib/index.js',
  },
  output: {
    filename: 'index.js',
    library: 'poker-calculator',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, './'),
  },
  mode: 'production',
};
