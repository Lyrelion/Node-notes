const express = require('express');
const path = require('path');
const app = express();

// 实现静态资源访问功能
// app.use('自定义静态资源路由',express.static('静态资源真实路径'))
app.use('/static', express.static(path.join(__dirname, 'public')))

// 端口监听
app.listen(3000);
console.log('服务器启动成功');

// http://localhost:3000/static/default.html 别忘记 static 以及文件后缀名
// http://localhost:3000/static/article.html