const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry:'./src/index.js',
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'app.bundle.js'
  },
  module:{
    rules:[
      {
        test:/\.css$/,
        //use:['style-loader','css-loader']
        use:[MiniCssExtractPlugin.loader,'css-loader']
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
              name: './img/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  devtool:'cheap-module-eval-source-map',
  devServer:{
    historyApiFallback:true,
    hot:true,
    inline:true,
    overlay:{
      warnings:true,
      errors:true,
    },
    stats:{
      color:true,
    }
  },
  plugins: [

    new HtmlWebpackPlugin({
     title: 'Project Demo',
     minify: {
      collapseWhitespace: true
     },
     hash: true,
     template: './src/view/index.html'
    }),
    new MiniCssExtractPlugin({
      filename:'app.css',
    })
  ]

}