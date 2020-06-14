// 引入express框架
const express = require('express');
// 创建网站服务器
const app = express();
// 构建模块化路由的基础代码
// 创建路由对象：Router()
const home = express.Router();
// 为路由对象匹配请求路径，home这个路由对象对应的是 /home 这条请求路径
// 匹配请求路径采用 app.use('目标请求路径',路由对象)
app.use('/home', home);
// 创建二级路由，在路由请求对象的下面，创建二级路由并调用方法
home.get('/index', (req, res) => {
        res.send('欢迎来到博客首页页面')
    })
    // 输入 localhost:3000/home/index，页面显示响应信息
    // 端口监听
app.listen(3000);
console.log('服务器启动成功');