const target = 'http://10.199.20.15:3000/'; // 开发环境
module.exports = {
  devServer: {
    port: 8080,
    headers: {
      'Access-Control-Allow-Origin': '*' // 允许跨域
    },
    // proxy: {
    //     '/dsc-web': {
    //         target,
    //         secure: false,
    //         changeOrigin: true,
    //     },
    // },
  },
  configureWebpack: {
    output: {
      library: 'vueApp',
      libraryTarget: 'umd'
    }
  }
};
