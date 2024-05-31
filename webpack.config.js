const HtmlWebPackPlugin = require("html-webpack-plugin");

const path = require('path');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      }
    ]
  },
  plugins : [
    new HtmlWebPackPlugin({template: __dirname+"/src/index.html"})
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist/'),
    },
    compress: true,
    port: 9000,
  },
  mode: 'development'
};

