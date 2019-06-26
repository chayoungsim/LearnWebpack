const path = require('path'); // node.js의 모듈로서 파일 경로를 다룸.
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry:{
    app:['./src/index.js']
  },
  output:{
    filename:'[name].bundle.js',
    path:path.resolve(__dirname,'dist')
  }
}
