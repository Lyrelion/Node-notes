// 引入express框架
const express = require('express');
// 创建网站服务器
const app = express();
// 介绍中间件 
app.get('/request', (req, res, next) => {
    // 进行了赋值，没有响应给客户端
    req.name = "茶茶子天下第一";
    // next()：交给下一个中间件继续处理，此时不响应客户端任何信息
    next();
})

app.get('/request', (req, res) => {
    // 通过 next()，可以继续处理上一个请求
    // 此时调用 send()方法，将赋值后的 req.name 响应给客户端
    res.send(req.name)
})

// 监听端口
app.listen(3000);
console.log('服务器启动成功');