const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry : './src/index.js',
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'app.bundle.js',
    publicPath:'dist/'
  },
  module:{
    rules:[
     {
         test:/\.css$/,
         use:['style-loader','css-loader']
     },
     {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!sass-loader'
     },
     { // babel
      test: /\.m?js$/,
      exclude: /node_modules/,
      use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          }
        }
      },
      { // file
        test: /\.(gif|jpg|png|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: './images/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
     title: 'Project Demo',
     minify: {
      collapseWhitespace: true
     },
     hash: true,
     template: './src/index.html'
    })
  ]
}