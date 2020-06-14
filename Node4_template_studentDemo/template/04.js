const template = require('art-template');
const path = require('path');

const views = path.join(__dirname, 'views', '04.art');

// 子模板的应用
const html = template(views, {
    msg: '我是首页主模板'
});

console.log(html);