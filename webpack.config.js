const path = require('path')
const webpack = require('webpack')
const devPort = process.env.port || 3000

module.exports = {
  entry: {
    app: [
      './src/index.ts'
    ]
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: __dirname + '/public',
    publicPath: '/',
  },
  devServer: {
    contentBase: 'public/',
    historyApiFallback: true,
    port: devPort,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  plugins: [],
}
