// 引入express框架
const express = require('express');
const bodyParser = require('body-parser');
// 创建网站服务器
const app = express();

// 路由参数 req.params 
// 注意下面的:冒号
app.get('/index/:id/:name/:age', (req, res) => {
    // 给客户端响应路由参数
    res.send(req.params)
})

// 端口监听
app.listen(3000);
console.log('服务器启动成功');
// http://localhost:3000/index/1/Tea/21 
// 这个网址后面的每一项都不能少，否则找不到路由
// 浏览器响应了自己的路由参数 {"id":"1","name":"Tea","age":"21"}