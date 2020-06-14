// 1.在普通函数定义的前面加上async关键字 普通函数就变成了异步函数
// 2.异步函数默认的返回值是promise对象
// console.log(fn ()) // 输出：Promise {undefined}
// 3.在异步函数内部使用 throw关键字 进行错误的抛出
// 
// await关键字
// 1.它只能出现在异步函数中，后面只能跟 promise对象
// 2.await promise 它可以暂停异步函数的执行 等待promise对象返回结果后再向下执行函数

// async function fn () { // 书写异步函数
// 	throw '发生了一些错误'; // 抛出异常，代替 reject()
// 	return 123;  // 返回结果，代替 resolve()
// }

// fn ().then(function (data) { // 获取异步函数处理结果
// 	console.log(data);
// }).catch(function (err){
// 	console.log(err);
// })
// 也可写成下面这种格式：
// fn ().then（ data => console.log(data); ）.catch( err => console.log(err);)

async function p1() {
    return 'p1'; // 相当于 return替换以前的 resolve()方法
}

async function p2() {
    return 'p2'; // 异步函数默认的返回值是promise对象
}

async function p3() {
    return 'p3';
}
// p1 () p2 () p3 () 都返回 Promise对象
async function run() { //此异步函数 负责 按顺序执行其他异步函数
    let r1 = await p1() // await使得只有当 p1()得到结果之后 才会继续向下执行
    let r2 = await p2()
    let r3 = await p3()
    console.log(r1)
    console.log(r2)
    console.log(r3)
}

run(); // p1 p2 p3