// 引入mongoose第三方模块 用来操作数据库
const mongoose = require('mongoose');
// 数据库连接
mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true })
    // 连接成功
    .then(() => console.log('数据库连接成功'))
    // 连接失败
    .catch(err => console.log(err, '数据库连接失败'));
// 用户集合规则
const userSchema = new mongoose.Schema({ // 用户集合
    name: {
        type: String,
        required: true
    }
});
// 文章集合规则
const postSchema = new mongoose.Schema({ // 文章集合
    title: {
        type: String
    },
    author: {
        // 使用 _id 对集合进行关联
        type: mongoose.Schema.Types.ObjectId, // id关联
        ref: 'User' // 进行关联
    }
});
// 用户集合
const User = mongoose.model('User', userSchema);
// 文章集合
const Post = mongoose.model('Post', postSchema);

// 创建用户
// User.create({name: '茶茶子'}).then(result => console.log(result));
// 创建文章 这里的文章作者就要复制 用户id 在数据库中的编号（系统自动生成)
// Post.create({titile: '123', author: '5c0caae2c4e4081c28439791'}).then(result => console.log(result));
Post.find().populate('author').then(result => console.log(result))
    // 使用 populate()方法 查询POST关联集合 展示 author的用户信息