// 引入express框架
const express = require('express');
const fs = require('fs');
// 创建网站服务器
const app = express();
// 错误处理中间件
app.get('/index', (req, res, next) => {
    // throw new Error('程序发生了未知错误')
    fs.readFile('./不存在的文件.js', 'utf8', (err, result) => {
        if (err != null) {
            // 如果错误对象不为空，调用 next()，将err传递给错误处理中间件
            next(err)
        } else {
            // 如果没有错误，将结果响应给客户端
            res.send(result)
        }
    })
})

// 错误处理中间
app.use((err, req, res, next) => {
        // 接收到错误之后，会自动调用错误处理中间件，接收不到就就不调用
        // err.message：向客户端响应上面 err的具体内容信息
        res.status(500).send(err.message);
    })
    // 输入网址：localhost:3000/index 报错：
    // ENOENT: no such file or directory, 
    // open 'D:\Desktop\Desktop\node\Node5_Express\不存在的文件.js'

// 监听端口
app.listen(3000);
console.log('服务器启动成功');