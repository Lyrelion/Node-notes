// 异步API 可通过 回调函数传参 的方式 拿到异步API执行结果
function getMsg(callback) { // callback是回调函数，形参
    setTimeout(function() {
        callback({ // 在 异步API 中调用回调函数
                msg: 'hello async API.js' // 将 异步API的 执行结果 作为 参数 传递出去
            }) // { msg: 'hello async API.js' }
    }, 2000)
}
getMsg(function(data) { // function()匿名函数，实参 
    console.log(data); // data 接受 callback 传递的参数，即异步API的执行结果
});

// 异步API 无法通过 返回值 拿到返回结果
// 因为下面的定时器有2s延迟，调用getting()后，异步API定时器还未返回结果
// 而代码会自动给函数填充默认值 return undefined;
// 最终拿到的结果就是默认值 undefined，而不是 异步PAI 中的结果 我不能被输出
// 所以 异步API 无法通过 返回值 拿到返回结果
function getting() {
    setTimeout(function() {
        return {
            msg: '我不能被输出'
        }
    }, 2000);
    // return undefined; //默认值
}
const msg = getting();
console.log(msg); // undefined