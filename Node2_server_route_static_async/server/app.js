// 用于创建网站服务器的模块
const http = require('http');
// 用于处理 url地址
const url = require('url');
// app对象就是网站服务器对象
const app = http.createServer();
// 当客户端有请求来的时候
app.on('request', (req, res) => {
    // 获取请求方式
    // console.log(req.method);
    // ===========================================================
    // 在浏览器中，输入网址：localhost：3000，命令行会输出两次 GET
    // 第一次GET：输入网址请求，我们手动触发
    // 第二次GET：浏览器图标请求，是自动发出的
    // ===========================================================
    // 在浏览器中，提交表单，命令行输出POST，GET
    // POST：提交表单的行为，GET：提交表单后，浏览器有个默认的跳转行为
    // ===========================================================
    // 获取请求地址 可以输出请求参数
    // console.log(req.url); // 命令行输出 /index /list 等等
    // ===========================================================
    // 获取请求报文信息 req.headers 获取具体信息，加['键名']即可
    // console.log(req.headers['accept']);
    // ===========================================================
    // 设置响应头信息，参数一：http状态码，参数二：响应内容类型
    res.writeHead(200, {
        'content-type': 'text/html;charset=utf8' // 可以解析 html标签了
    });

    // url.parse()：解析url地址，参数如下
    // 1) 要解析的url地址
    // 2) 将查询参数解析成对象形式（默认情况下，req.url是字符串类型）
    // req.url对象包含很多属性，如：pathname、query
    // pathname：客户端请求地址，不包含请求参数的请求地址
    // query：请求参数对象，包含各种请求参数及其值
    // 下面是 解构解析的url对象，获取需要的两个参数，在命令行中输出
    let { query, pathname } = url.parse(req.url, true);
    // 输入网址：http://localhost:3000/?name=TeaMeow&age=21 得到下面结果
    console.log(query.name) // TeaMeow
    console.log(query.age) // 21

    // 根据客户端请求地址不同，响应不同内容
    // 输入localhost:3000/index 或者 localhost:3000 都直接跳转到首页
    if (pathname == '/index' || pathname == '/') {
        res.end('<h2>欢迎来到首页</h2>');
    } else if (pathname == '/list') {
        res.end('welcome to listpage');
    } else {
        res.end('not found');
    }

    if (req.method == 'POST') { // 运行 form.html，点击提交，浏览器跳转后，显示post
        res.end('post') // 服务器直接响应在浏览器上，不是控制台上
    } else if (req.method == 'GET') { // 直接输入网址localhost:3000，网页内容显示get
        res.end('get')
    }
    // 只有将响应头内容类型设置为：'content-type': 'text/html... 下面的标签才会被解析
    // res.end('<h2>hello user</h2>'); 
});
// 监听端口
app.listen(3000);
console.log('网站服务器启动成功');