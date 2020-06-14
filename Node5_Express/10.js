// 引入express框架
const express = require('express');
// 单独下载第三方处理 post参数模块
const bodyParser = require('body-parser');
// 创建网站服务器
const app = express();

// 如何获取post请求参数

// bodyParser：请求体解析之后，解析值会被放到req.body属性中，当内容为空时候，为空对象{}
// extended: false 方法内部使用 querystring模块 处理请求参数的格式
// extended: true 方法内部使用 第三方模块qs 处理请求参数的格式
// bodyParser.urlencoded()--解析文本格式
// 拦截所有请求，解析请求体
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/add', (req, res) => {
    // 把 post请求参数 发出给客户端作为相应
    res.send(req.body)
})

// 端口监听
app.listen(3000);
console.log('服务器启动成功');
// 启动这个页面
// 在浏览器中打开 post.html，并输入表单提交
// 提交后得到 res.send()，客户端响应如下：
// {"username":"茶茶子","password":"123456"}
// 必须通过表单提交才是post请求，直接在地址栏输入/add 会导致 Cannot GET /add