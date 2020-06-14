const fs = require('fs');
// 回调地狱
// fs.readFile('./1.txt', 'utf8', (err, result1) => {
// 	console.log(result1)
// 	fs.readFile('./2.txt', 'utf8', (err, result2) => {
// 		console.log(result2)
// 		fs.readFile('./3.txt', 'utf8', (err, result3) => {
// 			console.log(result3)
// 		})
// 	})
// });

function p1() {
    return new Promise((resolve, reject) => {
        fs.readFile('./1.txt', 'utf8', (err, result) => {
            resolve(result)
        })
    });
}

function p2() {
    return new Promise((resolve, reject) => {
        fs.readFile('./2.txt', 'utf8', (err, result) => {
            resolve(result)
        })
    });
}

function p3() {
    return new Promise((resolve, reject) => {
        fs.readFile('./3.txt', 'utf8', (err, result) => {
            resolve(result)
        })
    });
}

p1().then((r1) => { // p1promise对象读取结果
        console.log(r1);
        return p2(); // return得到的是 p2promise对象
    })
    .then((r2) => { // p2promise对象读取结果
        console.log(r2);
        return p3();
    })
    .then((r3) => {
        console.log(r3)
    })