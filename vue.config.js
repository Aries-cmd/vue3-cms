const path = require('path')

module.exports = {
  outputDir: './build',
  devServer: {
    proxy: {
      '/api': {
        // 路径中有 /api 的请求都会走这个代理
        target: 'http://152.136.185.210:5000', // 要访问的接口域名
        ws: true, // 是否启用  websockets
        // secure: false,
        changeOrigin: true,
        // 开启代理：在本地会创建一个虚拟服务端，
        // 然后发送请求的数据，并同时接收请求的数据，
        // 这样服务端和服务端进行数据的交互就不会有跨域问题
        pathRewrite: {
          '^/api': '' // 这里理解成用/api代替target里面的地址，即去掉路径中的/api  的这一截
        }
      }
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))
      .set('views', '@/views')
  }
}
