const express = require('express');
const path = require('path');
const app = express();

// 模板引擎
// 要下载两个模板引擎： npm install express-art-template art-template

// 1.告诉 express框架使用什么模板引擎渲染什么后缀的模板文件 engine:引擎
//  1.模板后缀
//  2.使用的模板疫情
app.engine('art', require('express-art-template'))
    // 2.告诉 express框架模板 存放的位置是什么，此处的第一个 views 是固定写法
app.set('views', path.join(__dirname, 'views'))
    // 3.告诉express框架模板的默认后缀是什么，此处的第一个 views engine 是固定写法
app.set('view engine', 'art');

// 通过get方式请求 index路径 会直接响应模板引擎做的事
app.get('/index', (req, res) => {
    // 1. 拼接模板路径
    // 2. 拼接模板后缀
    // 3. 哪一个模板和哪一个数据进行拼接
    // 4. 将拼接结果响应给了客户端
    // res.render('模板文件名'，要添加的数据对象)
    res.render('index', {
        msg: 'index page',
        users: [{
            name: 'TeaMeow',
            age: 21
        }, {
            name: 'BITDOGE',
            age: 22
        }]
    })
});

app.get('/list', (req, res) => {
    res.render('list', {
        msg: 'list page',
        users: [{
            name: 'TeaMeow',
            age: 21
        }, {
            name: 'BITDOGE',
            age: 22
        }]
    })
})

// 端口监听
app.listen(3000);
console.log('服务器启动成功');