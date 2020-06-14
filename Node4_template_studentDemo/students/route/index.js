// 引入router模块
const getRouter = require('router');
// 获取路由对象
const router = getRouter();
// 学生信息集合
const Student = require('../model/user');
// 引入模板引擎
const template = require('art-template');
// 引入querystring模块
const querystring = require('querystring');

// 呈递学生档案信息页面
router.get('/add', (req, res) => {
    let html = template('index.art', {});
    res.end(html);
})

// 呈递学生档案信息列表页面
router.get('/list', async(req, res) => {
        // 查询学生信息 需要时间，所以采用异步方法
        let students = await Student.find();
        console.log(students);
        let html = template('list.art', {
            students: students
        })
        res.end(html)
    })
    // 实现学生信息添加功能路由
router.post('/add', (req, res) => {
    // 接收 post请求参数
    let formData = '';
    req.on('data', param => {
        formData += param;
    });
    req.on('end', async() => {
        // 向数据库添加 post请求参数，耗时，所以采用异步函数的形式
        // post只能添加对象形式的参数，所以将接受的 post请求参数 转换为 对象格式
        await Student.create(querystring.parse(formData))
            // 添加完学生对象之后，重定向到list页面，301：实现重定向功能
        res.writeHead(301, {
            Location: '/list'
        });
        // 重定向后，一定要对客户端作出响应，否则上述代码无效
        res.end()
    })
});
module.exports = router;