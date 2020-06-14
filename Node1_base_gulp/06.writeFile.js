const fs = require('fs');
// 如果没有 demo.txt文件，系统会自动创建
// fs.writeFile('./demo.txt', '即将要写入的内容', err => {
fs.writeFile('./writeFile_demo.txt', '即将要写入的内容666', err => {
    if (err != null) { // 证明当前写入是失败的
        console.log(err); // 输出错误信息
        return; // return 终止下面代码执行
    }
    console.log('文件内容写入成功'); // 控制台输出信息
    // 最终文件写入内容，会覆盖文件原本的内容
    // 即将要写入的内容 被替换成 即将要写入的内容666
})