const express = require('express');

const home = express.Router();

home.get('/index', (req, res) => {
    res.send('欢迎来到博客首页页面')
});

// 导出路由模块信息
module.exports = home;
// 输入 localhost:3000/home/index，页面显示响应信息