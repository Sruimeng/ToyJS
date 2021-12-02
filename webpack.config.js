const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode:  'development',
  entry: {
    index: "./src/toy.ts"
  },
  output: {
    publicPath: __dirname + "/dist/", // 打包后资源文件的引用会基于此路径
    path: path.resolve(__dirname, "dist"), // 打包后的输出目录
    filename: "app.js",
    chunkFilename: "app.mini.js"
  },
  devtool: "source-map", // 
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 7223,
    hot: true,
    overlay: true,
    historyApiFallback: {
      rewrites: [{ from: /.*/, to: "./index.html" }]
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(eot|woff2?|ttf|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "[name]-[hash:5].min.[ext]",
              limit: 3000,
              publicPath: "fonts/",
              outputPath: "fonts/"
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({ // 自动生成html,并且自动导入所有依赖同步包
      filename: "index.html",
      template: "./example/index.html",
      minify: {
        // collapseWhitespace: true // 压缩
      }
    }),
    new MiniCssExtractPlugin({
      filename: "[id].[name].[chunkhash:8].css",
      chunkFilename: "[id].[name].[chunkhash:8].css"
    })
  ]
}
