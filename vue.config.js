module.exports = {
    devServer: {
      proxy: {
        '/rpcsearchnew': {
          target: 'http://t1.restful.5lux.com.cn',						        
          changeOrigin: true
        }
      }
    }
  }