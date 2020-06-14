const mongoose = require('mongoose');
// 连接数据库模块
mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true })
    .then(() => console.log('数据库连接成功'))
    .catch(() => console.log('数据库连接失败'))