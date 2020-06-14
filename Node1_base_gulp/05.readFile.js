// 1.通过模块的名字fs，对模块进行引用
const fs = require('fs');

// 2.通过模块内部的readFile读取文件内容
fs.readFile('./01.helloworld.js', 'utf8', (err, doc) => {
    // 读取文件是对硬盘操作，有时间损耗，不能立刻获得读取结果，所以用回调函数获取结果
    // 如果文件读取出错，err是一个对象，包含错误信息
    // 如果文件读取正确，err是null
    // doc 是文件读取的结果
    console.log(err); // null
    console.log(doc); // 读取了01.helloworld.js文件内容
});