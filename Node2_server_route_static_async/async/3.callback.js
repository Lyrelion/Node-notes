function getData(callback) { // 在函数内定义回调函数
    callback('123') // 在函数执行结束后，调用自己的回调函数，获取结果，甚至传递参数
}

getData(function(n) {
    console.log('callback函数被调用了')
    console.log(n)
});