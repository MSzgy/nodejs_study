const http = require('http');

// 2 创建web服务器实例
const server = http.createServer()

// 3 为服务器绑定request事件，监听客户端请求
server.on('request', function (req, res) {
    // req 是请求对象，包含了与客户端相关的数据和属性,例如请求路径和请求方法，请求头，请求体，请求参数，请求地址等。
    console.log('Someone visit our web server')
    console.log(req.url + " " + req.method)
    // res 是响应对象，包含了与服务器相关的数据和属性，例如响应头，响应体，响应状态码等，通过res对象可以向客户端发送响应数据。
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    res.end("ok")


})

// 4 启动服务器
server.listen(8080, function () {
    console.log('server running at http://127.0.0.1:8080')
})


