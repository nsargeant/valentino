const   HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/entries/browser.js',
  output: {
    path: './dist-browser',
    filename: 'index.js'
  },
  devServer: {
    inline: true,
    port: 8000
  },
  module: {
    loaders: [
      { 
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },

      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }

    ]
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Webpack',
    inject : 'body'
  })]
}