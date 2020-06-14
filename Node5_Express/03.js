// 引入express框架
const express = require('express');
// 创建网站服务器
const app = express();

// 接收所有请求的中间件
app.use((req, res, next) => {
    console.log('请求走了app.use中间件');
    next()
})

// 当客户端访问/request请求的时候走当前中间件
app.use('/request', (req, res, next) => {
    console.log('请求走了app.use / app.request 两个中间件')
    next()
})

app.get('/list', (req, res) => {
    res.send('list页面')
})

app.get('/request', (req, res, next) => {
    req.name = "茶茶子";
    next();
})

app.get('/request', (req, res) => {
    res.send(req.name)
})

// 监听端口
app.listen(3000);
console.log('服务器启动成功');
// 服务器段响应结果1：
// 服务器启动成功
// 请求走了app.use中间件
// 请求走了app.use / app.request 两个中间件
// 网页输入 localhost:3000/request 显示茶茶子
// 服务器响应结果2：
// 请求走了app.use中间件
// 网页输入 localhost:3000/list 显示list页面