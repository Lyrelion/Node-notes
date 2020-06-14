const fs = require('fs');

let promise = new Promise((resolve, reject) => {
    // 读取结果 将不在回调函数内进行处理
    // fs.readFile('./1.txt', 'utf8', (err, result) => { // 目录正常
    fs.readFile('./100.txt', 'utf8', (err, result) => { // 目录错误
        if (err != null) {
            reject(err); // 出现错误，调用 reject()回调函数，将 err传递到外面
        } else {
            resolve(result); // 读取成功，调用 resolve()回调函数，将 result传递到外面
        }
    });
});
promise.then((result) => { // 链式编程 promise.then().catch()
        console.log(result); // 读取成功：1
    })
    .catch((err) => {
        console.log(err); // 读取失败：[Error: ENOENT: no such file or directory...
    })