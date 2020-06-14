console.log('代码开始执行')

setTimeout(function() {
    console.log('2s')
}, 2000)

setTimeout(function() {
    console.log('0s')
}, 0)

console.log('代码结束执行')
    // node会先将所有 同步API 按顺序执行 console.log('代码开始执行') console.log('代码结束执行') 
    // 中途遇到的 异步API 会被放入 异步代码执行区 setTimeout(function () {2s}、setTimeout(function () {0s}
    // 紧接着把 异步API 对应的 回调函数 放到 回调函数队列 console.log('2s')、console.log('0s')
    // 此时 异步代码执行区 和 回调函数队列 中的代码均未被执行
    // 同步API 执行完毕后，node.js 会依次执行异步代码执行区，按照定时器决定执行哪个回调函数，将那个回调函数放入同步代码执行区
    // 即 定时器先结束的回调函数 先执行 console.log('0s') console.log('2s')
    // 最终结果：
    // 代码开始执行 
    // 代码结束执行
    // 0s
    // 2s