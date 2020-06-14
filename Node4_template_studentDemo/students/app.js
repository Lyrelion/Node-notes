// 引入http模块
const http = require('http');
// 创建网站服务器
const app = http.createServer();
// 数据库连接
require('./model/connect');
// 引入path模块
const path = require('path');
// 引入静态资源访问模块
const serveStatic = require('serve-static');
// 实现静态资源访问服务 serveStatic( 静态资源存放路径 )
// 静态资源一般存放在 public目录
const serve = serveStatic(path.join(__dirname, 'public'))
    // 引入处理日期的第三方模块
const dateformat = require('dateformat');
// 引入路由处理模块（单独在别的文件夹中定义具体路由模块）
const router = require('./route/index');
// 引入模板引擎
const template = require('art-template');
// 配置模板的根目录 模板一般存放在 views目录
template.defaults.root = path.join(__dirname, 'views');
// 处理日期格式的方法
template.defaults.imports.dateformat = dateformat;

// 当客户端访问服务器端的时候（比如输入网址）
app.on('request', (req, res) => {
    // 启用路由功能 回调函数不可以省略
    router(req, res, () => {})
        // 启用静态资源访问服务功能 回调函数不可以省略
    serve(req, res, () => {})
});
// 端口监听
app.listen(3000);
console.log('服务器启动成功');