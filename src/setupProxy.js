const proxy = require('http-proxy-middleware')

module.exports = function (app) {

    app.use(proxy(
        '/index',
        {
            "target": "http://localhost:8888",
            "changeOrigin": true, pathRewrite: {
                "^/index": "/"
            }
        }))

    //app.use(proxy(...)) //可以配置多个代理
}