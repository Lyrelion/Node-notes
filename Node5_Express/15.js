const express = require('express');
const path = require('path');
const app = express();
// 模板配置
app.engine('art', require('express-art-template'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'art');

// app.locals对象：
// 存储 所有模板引擎都要用到的公共数据，将他们作为对象属性赋值给 locals对象

app.locals.users = [{
    name: 'TeaMeow',
    age: 21
}, {
    name: 'BITDOGE',
    age: 22
}]

app.get('/index', (req, res) => {
    res.render('index', {
        msg: '首页'
    })
});

app.get('/list', (req, res) => {
    res.render('list', {
        msg: '列表页'
    });
})

// 端口监听
app.listen(3000);
console.log('服务器启动成功');