// http://m.5lux.com/
module.exports = {
  devServer: {
    proxy: {
      '/rpcsearchnew': {
        target: 'http://t1.restful.5lux.com.cn',						        
        changeOrigin: true,
        headers: {
          Referer: 'http://m.5lux.com/'
        }
      }
    }
  }
}