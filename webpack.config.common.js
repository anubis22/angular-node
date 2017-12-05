var webpack = require('webpack');

module.exports = {
  entry: {
    'app': './assets/app/main.ts'
  },
    resolve: {
      extensions: ['.js', '.ts']
    },
      module: {
        loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
          // query: {
          //   cacheDirectory: true,
          //   presets: ['react', 'es2015']
        },
        {
          test: /\.html$/,
          use: [{ loader: 'html-loader' }]
        },
        {
          test: /\.css$/,
          use: [{ loader: 'raw-loader' }]
          },
        ]
      }
};
