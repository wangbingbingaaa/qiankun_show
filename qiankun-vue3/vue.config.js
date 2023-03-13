
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
    publicPath: process.env.BASE_URL, // 部署应用包时的基本 URL
    outputDir: 'dist', // build 时生成的生产环境构建文件的目录
    productionSourceMap: false,// 打包时不生成.map文件
    css: {
        extract: isProduction ? true : false, // 是否使用css分离插件 ExtractTextPlugin
        sourceMap: false,// 开启 CSS source maps?
    },
    configureWebpack: {
        output: {
            library: 'data-monitor',
            libraryTarget: 'umd',
        }
    },

    lintOnSave: false,//关闭eslint
    devServer: {
        open: true, // 启动服务后是否打开浏览器
        host: "localhost",
        port: 10002, // 服务端口
        headers: {
            'Access-Control-Allow-Origin': '*' // 允许跨域
        },

    },
    publicPath: 'http://localhost:10002/',
};
