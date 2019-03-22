const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const srcPath = (subdir) => {
  return path.join(__dirname, 'src', subdir)
}

module.exports = {
  entry: {
    app: [
      './src/script.tsx',
    ],
  },
  output: {
    filename: 'js/[name].bundle.js',
    chunkFilename: 'js/[contenthash].bundle.js',
    path: __dirname + '/public',
    publicPath: '/',
  },
  optimization: {
    splitChunks: {
      name: 'module',
      chunks: 'async',
    },
  },
  resolve: {
    alias: {
      components: srcPath('components'),
      constants: srcPath('constants'),
      reducers: srcPath('reducers'),
      store: srcPath('store'),
      types: srcPath('types'),
      utils: srcPath('utils'),
    },
    extensions: ['.js', '.ts', '.tsx'],
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
        exclude: /(node_modules)/,
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'precess.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      template: 'src/index.html'
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['public/js']
    }),
  ],
  devServer: {
    historyApiFallback: true
  }
}
