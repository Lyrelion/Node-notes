// 引入express框架
const express = require('express');
// 创建网站服务器
const app = express();

// 如何获取 get请求参数 req.query

app.get('/index', (req, res) => {
    // 获取get请求参数
    res.send(req.query)
})

// 端口监听
app.listen(3000);
console.log('服务器启动成功');
// http://localhost:3000/index?name=茶茶age=21
// {"name":"茶茶","age":"21"}