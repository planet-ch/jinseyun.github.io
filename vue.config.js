// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']
module.exports = {
  // 基本路径
  publicPath: './',
  assetsDir: 'client',
  indexPath: 'client.html',
  // 输出文件目录
  outputDir: 'dist',
  // 配置webpack开发服务功能
  productionSourceMap: false,
  configureWebpack: { // plugins
    plugins: [
      // gzip
      new CompressionWebpackPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        threshold: 10240,
        minRatio: 0.8
      })
    ]
  },
  // 移除 prefetch 插件
  chainWebpack: config => {
    config.plugins.delete('prefetch')
  },
  // 本地代理
  // devServer: {
  //   // 服务端压缩是否开启
  //   compress: true,
  //   // 配置服务端口号
  //   host: '0.0.0.0',
  //   port: 8090,
  //   proxy: {
  //     '/api.php': {
  //       // target: 'https://t2.youmitu.com/', // 正式环境
  //       // target: 'http://t1156.kakaapp.com/', // 测试环境
  //       target: 'http://t1202.kakaapp.com/',
  //       // target: process.env.VUE_APP_BASEURL === 'test' ? 'http://t1088.kakaapp.com' : 'http://t1202.kakaapp.com',
  //       ws: true,
  //       changeOrigin: true,
  //       pathRewrite: {
  //         '^/api.php': '/api.php'
  //       }
  //     }
  //   }
  // }
}
