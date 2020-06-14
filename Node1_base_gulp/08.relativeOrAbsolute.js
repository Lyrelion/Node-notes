// 相对路径 vs 绝对路径
const fs = require('fs');
const path = require('path');
// __dirname：打印当前文件的绝对路径（不包括本文件名）
console.log(__dirname); // D:\Desktop\Desktop\node\Node1

// 使用路径拼接，获取当前文件绝对路径+文件名 
// D:\Desktop\Desktop\node\Node1\01.helloworld.js
console.log(path.join(__dirname, '01.helloworld.js'))

// 使用绝对路径，就不需要命令窗口一定要在固定的文件目录下开启了
fs.readFile(path.join(__dirname, '01.helloworld.js'), 'utf8', (err, doc) => {
    console.log(err) // 文件读取失败 err是个对象，文件读取成功，err是null
    console.log(doc)
});