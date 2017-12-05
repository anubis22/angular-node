const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: __dirname,
  entry: './app/bundle.js',
  output: {
    path: __dirname + './src',
    filename: 'bundle.js',
    publicPath: '/assets/'
  },
  devtool: 'eval-source-map',
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ]
}
