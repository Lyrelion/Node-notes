// 引入mongoose第三方模块 用来操作数据库
const mongoose = require('mongoose');
// 数据库连接
mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true })
    // 连接成功
    .then(() => console.log('数据库连接成功'))
    // 连接失败
    .catch(err => console.log(err, '数据库连接失败'));

// 创建集合规则 就是创建构造函数 mongoose.Schema() 的实例对象
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    isPublished: Boolean
});

// 使用规则创建集合 mongoose.model('集合名称',集合规则)
// 集合名称必须首字母大写，到数据库会自动转换成小写复数
const Course = mongoose.model('Course', courseSchema) // courses

// 创建文档 插入数据后才会显现数据库
const course = new Course({
    name: 'mongoDB讲义',
    author: '茶茶子',
    isPublished: true
});
// 将文档插入到数据库中
course.save();