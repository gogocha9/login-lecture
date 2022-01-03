var path = require('path');

module.exports = {
   entry : './src/test.js',
    output: {
        filename : 'bundle.js',
        path : path.resolve(__dirname + '/build')
    },
    mode : 'none',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};