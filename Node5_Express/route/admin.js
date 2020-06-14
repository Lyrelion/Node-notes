const express = require('express');

const admin = express.Router();

// 为 admin匹配请求路径，是在主界面做的 /admin
admin.get('/index', (req, res) => {
    res.send('欢迎来到博客管理页面')
});

// 导出路由模块信息
module.exports = admin;
// 输入 localhost:3000/admin/index，页面显示响应信息