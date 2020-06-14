// 引入express框架
const express = require('express');
// 创建网站服务器
const app = express();

// 构建模块化路由
// 在route文件夹下，分别对路由进行分级拆分，然后导入这里的主程序
const home = require('./route/home');
const admin = require('./route/admin');

// 为路由对象匹配请求路径
app.use('/home', home);
app.use('/admin', admin);

// 端口监听
app.listen(3000);
console.log('服务器启动成功');