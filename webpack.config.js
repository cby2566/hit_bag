const HtmlWebpackPlugin = require("html-webpack-plugin");
//创建 html-webpack-plugin 对象
const htmlPlugin = new HtmlWebpackPlugin({
  //设置生成预览页面的模板文件
  template:"./public/index.html",
  //设置生成的预览页面名称
  filename:"index.html"
  /* TODO：打包时自动生产一个index.html并帮你引入bundle.js
  * 也可以指定模板，其html结构会被保留
  * npm i --save-dev html-webpack-plugin@4
  */ 
})

module.exports = {
  entry: __dirname + "/app/main.js",//已多次提及的唯一入口文件
  output: {
    path: __dirname + "/dist",//打包后的文件存放的地方
    filename: "bundle.js"//打包后输出文件的文件名
  },

  devServer: {
    contentBase: "./public",//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true,//实时刷新
    port: 8089,
  },
  // 加载器配置
  module: {
    rules: [
      //编译es6->es5：babel(babel-loader,babel-core,babel-preset-env)
      {
        test: /\.js$/,
        exclude: __dirname + '/node_modules',
        use: {
          loader: 'babel-loader',
          // 配置loader选项
          options: {
            presets: ['env', 'stage-3'], //编译ES6->ES5
          }
        }
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          // 要选择对应的loader
          {
            // url是将图像转成base64
            loader: 'url-loader',
            // file是将图像打包发送过去
            // loader: 'file-loader',
            
          },
        ],
      },
    ]
  },
  plugins:[ htmlPlugin ]
}