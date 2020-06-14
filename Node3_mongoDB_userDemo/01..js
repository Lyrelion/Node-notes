// 引入mongoose第三方模块 用来操作数据库
const mongoose = require('mongoose');
// 数据库连接 mongoose.connect()：返回的是 promise对象
// useNewUrlParser: true 这是链接数据库的过程中 系统提示的代码 需要进行添加 
mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true })
    // 连接成功
    .then(() => console.log('数据库连接成功'))
    // 连接失败
    .catch(err => console.log(err, '数据库连接失败'));