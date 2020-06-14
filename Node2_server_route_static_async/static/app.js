const http = require('http');
const url = require('url');
const path = require('path'); // 根据系统拼接路径分隔符
const fs = require('fs'); // 读取文件
// npm install mime 需要手动下载这个第三方模块
const mime = require('mime'); // 根据当前请求路径，分析出请求资源类型
const app = http.createServer();

app.on('request', (req, res) => {
    // 获取用户的请求路径
    let pathname = url.parse(req.url).pathname;
    // 不带参数的请求地址，如果为空，就转换为default.html，如果不为空，就保留原样
    pathname = pathname == '/' ? '/default.html' : pathname;
    // 将用户不带参数的请求路径，拼接为实际的服务器硬盘路径
    let realPath = path.join(__dirname, 'public' + pathname);
    // 根据路径，返回读取静态文件的资源类型响应格式
    let type = mime.getType(realPath)
        // 读取静态资源文件
    fs.readFile(realPath, (error, result) => {
        // 如果文件读取失败
        if (error != null) {
            res.writeHead(404, {
                'content-type': 'text/html;charset=utf8'
            })
            res.end('文件读取失败'); // 这里的服务器返回信息未被格式化，所以上面写响应头
            return; // 读取失败，打断程序执行
        }
        res.writeHead(200, { // 读取成功的响应头书写
            // 读取的文件可能是css/js/html，所以mine确定读取静态文件的响应格式
            'content-type': 'type' // 会在浏览器每个请求中多出 content-type选项
        })
        res.end(result); // 读取成功，响应读取结果
    });
});
app.listen(3000);
console.log('服务器启动成功')