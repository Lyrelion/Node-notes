const greeting = name => `hello ${name}`;
const x = 100;
exports.x = x;
module.exports.greeting = greeting;
//上面两行代码同时存在，执行04.require.js 输出结果：
// { x: 100, greeting: [Function: greeting] }
// 说明exports/module.exports效果相同

// 重新给 module.exports 赋值对象，执行04.require.js 输出结果：
// { name: '茶茶子' }
// 说明当exports对象和moudle.exports对象指向的不是同一个对象时 以module.exports为准
module.exports = {
        name: '茶茶子'
    }
    // 继续添加 exports，执行结果仍然是：
    // { name: '茶茶子' }
exports = {
    age: 20
}