const http = require('http'); // 1.引入系统模块http
const url = require('url');
const app = http.createServer(); // 2.创建网站服务器
// 3.为网站服务器对象添加请求事件
app.on('request', (req, res) => {
    // 获取请求方式 req.method获得的是大写请求方式，我们要转换成小写方便判断
    const method = req.method.toLowerCase();
    // 获取请求地址
    // req.url 获取了请求路径请求参数，url.parse将其由字符串处理为对象格式
    // 其中的属性 pathname就是不包含请求参数的单纯的请求路径
    // 我们用一个变量接收这个请求路径，用于路由判断
    const pathname = url.parse(req.url).pathname;

    res.writeHead(200, {
        // 返回的内容是中文，会有乱码问题，所以要指定响应头
        'content-type': 'text/html;charset=utf8'
    });
    // 4.实现路由功能
    if (method == 'get') {
        if (pathname == '/' || pathname == '/index') {
            res.end('欢迎来到首页')
        } else if (pathname == '/list') {
            res.end('欢迎来到列表页')
        } else {
            res.end('您访问的页面不存在')
        }
    } else if (method == 'post') {}
});
app.listen(3000);
console.log('服务器启动成功')