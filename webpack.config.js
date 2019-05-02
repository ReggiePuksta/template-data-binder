var path = require('path');
module.exports = {
  name: 'test',
  mode: 'development',
  entry: './test/test.js',
  devServer: {
    contentBase: './test',
    openPage: '/test.html',
    port:9000
  },
  output: {
    path: path.resolve(__dirname, 'test'),
    filename: 'test.bundle.js',
  }
};
var hels = [{
  name: 'dev',
  mode: 'development',
  entry: './src/index.js',
  devServer: {
    contentBase: './src',
    port:8080
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  }
}, {
  name: 'prod',
  mode: 'production',
  entry: './binding.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  }
}];
