const path = require('path')
const webpack = require('webpack')
const devPort = process.env.port || 8000

const srcPath = (subdir) => {
  return path.join(__dirname, 'src', subdir)
}

module.exports = {
  entry: {
    app: [
      './src/script.tsx'
    ]
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: __dirname + '/public/assets/js',
    publicPath: '/',
  },
  resolve: {
    alias: {
      components: srcPath('components'),
      reducers: srcPath('reducers'),
      store: srcPath('store'),
    },
    extensions: ['.js', '.ts', '.tsx']
  },
  devServer: {
    contentBase: './public/',
    historyApiFallback: true,
    port: devPort,
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        loader: 'tslint-loader',
        exclude: /(node_modules)/,
        options: {
          configFile: 'tslint.json',
          fix: true,
        },
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [],
}
