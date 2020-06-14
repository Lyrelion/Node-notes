const fs = require('fs');
// 依次读取：1文件、2文件、3文件
fs.readFile('./1.txt', 'utf8', (err, result1) => {
    console.log(result1) // 当系统调用回调函数显示读取结果result1时，证明读取完毕
    fs.readFile('./2.txt', 'utf8', (err, result2) => {
        console.log(result2)
        fs.readFile('./3.txt', 'utf8', (err, result3) => {
            console.log(result3)
        })
    })
});
// 输出结果：1 2 3
// 造成回调地狱：回调函数嵌套过多