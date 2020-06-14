// public/uploads/avatar
const path = require('path');
// 把目录名字传入，并用变量接收
const finalPath = path.join('public', 'uploads', 'avatar');

console.log(finalPath);