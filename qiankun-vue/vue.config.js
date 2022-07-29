module.exports = {
    devServer: {
        port: 10001,
        headers: {
            'Access-Control-Allow-Origin': '*' // 允许跨域
        }
    },
    publicPath: 'http://localhost:10001/',

    configureWebpack: {
        output: {
            library: 'vueApp',
            libraryTarget: 'umd',
        }
    }
};
