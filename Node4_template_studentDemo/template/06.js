const template = require('art-template');
const path = require('path');
// 引入时间处理模块，注意这里要单独安装这个第三方模块
const dateFormat = require('dateformat');
// 模板配置的应用
// 设置模板的根目录
template.defaults.root = path.join(__dirname, 'views');
// 导入模板变量，这样的话就可以在模板里调用外部方法
template.defaults.imports.dateFormat = dateFormat;
// 配置模板的默认后缀，在没有写文件名后缀的情况下，自动匹配这个后缀+文件名
template.defaults.extname = '.html';

const html = template('06.art', {
    // 填充时间，获取现在的时间
    time: new Date()
});
// 此处没有引入后缀，他会自动匹配 07.html
console.log(template('07', {}));
console.log(html);