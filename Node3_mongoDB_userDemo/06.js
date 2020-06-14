// 引入mongoose第三方模块 用来操作数据库
const mongoose = require('mongoose');
// 数据库连接
mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true })
    // 连接成功
    .then(() => console.log('数据库连接成功'))
    // 连接失败
    .catch(err => console.log(err, '数据库连接失败'));
// 创建集合规则
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String,
    hobbies: [String]
});
// 使用规则创建集合
const User = mongoose.model('User', userSchema);

// 更新一条文档 updateOne()方法 返回 promise对象，可以跟.then()
// User.updateOne({name: '李四'}, {age: 120, name: '李狗蛋'})
// .then(result => console.log(result))

// 更新多个文档 空对象表示更新全部文档
User.updateMany({}, { age: 300 }).then(result => console.log(result))