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
    hobbies: [String] // hobbies必须得是个数组，数组里必须是字符串格式
});
// 使用规则创建集合
const User = mongoose.model('User', userSchema);
// .find()：查询所有文档，返回 promise对象，可通过.then()查询结果
// 查询的结果result 是个数组，包含很多对象
// 查询到的结果始终用数组保存，没有查询到，就返回空数组

// 查询用户集合中的所有文档
// User.find().then(result => console.log(result));
// 通过_id字段查找文档
// User.find({_id: '5c09f267aeb04b22f8460968'}).then(result => console.log(result))

// findOne方法返回一条文档对象，不是返回数组，默认返回当前集合中的第一条文档
// User.findOne({name: '李四'}).then(result => console.log(result))
// 查询用户集合中 年龄字段 大于20并且小于40 的文档
// User.find({age: {$gt: 20, $lt: 40}}).then(result => console.log(result))
// 查询用户集合中hobbies字段值包含足球的文档
// User.find({hobbies: {$in: ['足球']}}).then(result => console.log(result))
// 选择要查询的字段 空格隔开 不想查的字段 在前面加- 如不想查询_id → -_id
// User.find().select('name email -_id').then(result => console.log(result))
// 根据 年龄字段 进行 升序 排列
// User.find().sort('age').then(result => console.log(result))
// 根据 年龄字段 进行 降序 排列
// User.find().sort('-age').then(result => console.log(result))
// 查询文档跳过前两条结果 限制显示3条结果 用于分页
User.find().skip(2).limit(3).then(result => console.log(result))