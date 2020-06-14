// 用于创建网站服务器的模块
const http = require('http');
// app对象就是网站服务器对象
const app = http.createServer();
// 处理字符串模块
const querystring = require('querystring');
// 当客户端有请求来的时候
app.on('request', (req, res) => {
    // post参数是通过 事件的方式 接受的
    // data 当请求参数传递的时候，触发 data事件
    // end 当参数传递完成的时候，触发 end事件
    // post请求参数不是一次性传完的，而是一部分一部分传，服务器一部分一部分接收
    // 所以先定义一个变量，拼接每一次接受的参数，参数传递晚了再返回拼接结果

    let postParams = ''; // 最终传递的全部参数

    // 参数开始传递 一部分一部分接收post请求参数
    req.on('data', params => { // params 每次传递的部分参数
        postParams += params; // 字符串拼接得到最终 post请求参数
    });
    // 参数传递完成 转换接受到的 post字符串 将它变成对象格式
    req.on('end', () => {
        console.log(querystring.parse(postParams));
    });
    // url模块处理的是请求地址
    // post参数不是放在地址栏里的，所以 不能用 url模块处理 post请求参数
    // post请求参数是放在请求体（报文）中传递的，最终是一个字符串
    // 所以可以通过字符串处理模块将 post请求参数字符串 转换为 对象模式
    // querystring.parse()
    res.end('ok'); // 命令行运行本文件，再运行form.html，提交表单后，浏览器得到服务器反馈ok
    // 控制台接收到post参数：{ username: 'TeaMeow', password: '233333' }
    // 网页客户端得到 命令行node服务端反馈：网页跳转到ok界面
});
// 监听端口
app.listen(3000);
console.log('网站服务器启动成功');