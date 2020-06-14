const template = require('art-template');
const path = require('path');

const views = path.join(__dirname, 'views', '03.art');

// 循环遍历并输出 users数组
const html = template(views, {
    users: [{
        name: '调香师',
        age: 20,
        sex: '女'
    }, {
        name: '杂技演员',
        age: 22,
        sex: '男'
    }, {
        name: '玛丽',
        age: 28,
        sex: '女'
    }]
});

console.log(html);