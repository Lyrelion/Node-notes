// 引入mongoose第三方模块 用来操作数据库
const mongoose = require('mongoose');
// 数据库连接
mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true })
    // 连接成功
    .then(() => console.log('数据库连接成功'))
    // 连接失败
    .catch(err => console.log(err, '数据库连接失败'));
// 创建集合规则
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    isPublished: Boolean
});
// 使用规则创建集合
const Course = mongoose.model('Course', courseSchema) // courses

// 向集合中插入文档方法二 表名.create({要插入的文档},()=>{})
// Course.create({ name: 'Javascript讲义', author: '茶茶子', isPublished: false }, (err, result) => {
//     console.log(err)
//     console.log(result)
// })
// 通过回调函数获得的结果 输出：
// null
// {
// 	_id: 5eda2154a231cc26341cc69c,
// 	name: 'Javascript讲义',
// 	author: '茶茶子',
// 	isPublished: false,
// 	__v: 0
//   }

// create()也返回 promise对象
// 所以可以通过 promise对象 的方法： .then().catch() 获取结果
Course.create({ name: 'Node讲义', author: '茶茶子', isPublished: true })
    .then(result => {
        console.log(result)
    })
    // 通过 promise对象 获得的结果 输出：
    // {
    //     _id: 5eda2355d11fba10e48fa806,
    //     name: 'Node讲义',
    //     author: '茶茶子',
    //     isPublished: false,
    //     __v: 0
    //   }