// 引入express框架
const express = require('express');
// 创建网站服务器
const app = express();
// 中间件应用

// 1.网站公告 不调用next()，放在最前面，拦截所有请求
// 请求没有next()就停止在这个中间件，这个中间件对客户端作出响应
// app.use((req, res, next) => {
// 	res.send('当前网站正在维护...')
// })

// 2.判断用户登录状态
app.use('/admin', (req, res, next) => {
    // 用户登录状态
    let isLogin = true;
    // 如果用户登录
    if (isLogin) {
        // 让请求继续向下执行
        next()
    } else {
        // 如果用户没有登录 直接对客户端做出响应
        res.send('您还没有登录 不能访问/admin 页面')
    }
})

app.get('/admin', (req, res) => {
    res.send('您已经登录 可以访问/admin 页面')
})

// 3.为客户端响应404状态码以及提示信息
// 当上面所有的请求路径都走过之后，调用这个use ，放在最下面表示上面都没有匹配到
app.use((req, res, next) => {
    // ses.status：设置 http状态码，链式调用 send() 给客户端响应信息
    res.status(404).send('当前访问的页面不存在')
})

// 监听端口
app.listen(3000);
console.log('服务器启动成功');