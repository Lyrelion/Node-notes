// 引入express框架
const express = require('express');
// 创建网站服务器，这样就不用写 http.createService() 了
const app = express();

app.get('/', (req, res) => {
    // send()
    // 1. send方法内部会 检测响应内容类型
    // 2. send方法会自动设置 http状态码
    // 3. send方法会自动设置 响应内容类型及编码
    res.send('Hello. Express');
})

app.get('/list', (req, res) => {
    res.send({ name: '茶茶子', age: 21 })
})

// 监听端口
app.listen(3000);
console.log('网站服务器启动成功');