# Learn Webpack

## package.json 생성
- npm init -y  : -y 자동생성해주는 옵션

## 기본파일경로 구성
- src/
- src/index.js
- src/img
- src/css
- src/view

## webpack 4
- npm install --save-dev webpack webpack-cli

## babel7 
- npm install --save-dev @babel/core babel-loader @babel/preset-env

## html, css 사용
-  npm install --save-dev css-loader html-webpack-plugin
-  npm install --save-dev css-loader style-loader 
-  npm install --save-dev node-sass sass-loader 
-- style 대신 css파일로 만들고 싶은 경우 mini-css-extract-plugin

## 이미지사용
-  npm install url-loader file-loader --save-dev