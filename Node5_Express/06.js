// 引入express框架
const express = require('express');
const fs = require('fs');
// util模块下有一个方法：promisify，可以将同步函数，转换为异步函数
const promisify = require('util').promisify;
// 调用此方法将 fs模块下的读取文件方法转换为异步方法
const readFile = promisify(fs.readFile);
// 创建网站服务器
const app = express();

// 异步函数错误的捕获

app.get('/index', async(req, res, next) => {
    try {
        // 中间件会尝试处理 try中的异步函数代码，成功跳过catch，失败执行catch
        await readFile('./不存在的文件.js')
    } catch (error) {
        // catch方法用于将收集到的错误传递给下一个中间件处理，调用next()
        next(error);
    }
    res.send('ok');
})

// 错误处理中间
app.use((err, req, res, next) => {
    // 接收来自catch传送的错误信息
    res.status(500).send(err.message);
})

// 监听端口
app.listen(3000);
console.log('服务器启动成功');

// 输入网址：localhost:3000/index 报错：
// ENOENT: no such file or directory, 
// open 'D:\Desktop\Desktop\node\Node5_Express\不存在的文件.js'