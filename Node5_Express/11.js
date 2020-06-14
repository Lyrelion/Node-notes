// 引入express框架
const express = require('express');
const bodyParser = require('body-parser');
// 创建网站服务器
const app = express();

app.use(fn({ a: 1 }))
    // 此中间件内引用一个函数，调用后在服务器端响应内容，并继续将请求传递给下一个中间件

function fn(obj) {
    return function(req, res, next) {
        // 向服务器端发送内容
        if (obj.a == 1) {
            console.log(req.url) // /
        } else {
            console.log(req.method) // GET
        }
        // 执行完此中间件逻辑后，将请求传递给下一个中间件继续处理
        next()
    }
}

app.get('/', (req, res) => {
    res.send('ok')
})

// 端口监听
app.listen(3000);
console.log('服务器启动成功');