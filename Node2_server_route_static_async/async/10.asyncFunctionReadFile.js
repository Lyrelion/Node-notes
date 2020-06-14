const fs = require('fs');
// 改造现有异步函数api 让其返回 promise对象 从而支持异步函数语法 即可以加 async
const promisify = require('util').promisify;
// 调用 promisify方法 改造现有异步API 让其返回 promise对象
const readFile = promisify(fs.readFile);
// readFile()方法本身是通过 返回值 获取结果的
// 也就是本身无法返回 Promise对象 这样不能加async关键字
async function run() {
    let r1 = await readFile('./1.txt', 'utf8')
    let r2 = await readFile('./2.txt', 'utf8')
    let r3 = await readFile('./3.txt', 'utf8')
    console.log(r1)
    console.log(r2)
    console.log(r3)
}

run();