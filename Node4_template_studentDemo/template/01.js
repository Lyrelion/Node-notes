// 导入模板引擎模块
const template = require('art-template');
// 导入拼接路径模块
const path = require('path');
// 指定要拼接的模板文件路径
// __dirname：当前文件所在根目录
// views：此文件夹一般用于存放模板，这么命名
// 01.art模板文件，注意后缀是.art
const views = path.join(__dirname, 'views', '01.art');
// 指定要拼接的内容
// template(模板文件路径，{拼接内容})
const html = template(views, {
        name: '茶茶子',
        age: 21,
        content: '<h1>我是标题</h1>'
    })
    // 在服务器中显示拼接结果
console.log(html);

// template方法是用来拼接字符串的，步骤总结：
// 1. 模板路径 绝对路径
// 2. 要在模板中显示的数据 对象类型
// 返回拼接好的字符串