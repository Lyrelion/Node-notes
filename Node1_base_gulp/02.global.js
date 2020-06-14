/*global.console.log('我是global对象下面的console.log方法输出的内容');

global.setTimeout(function (){
	console.log('123');
}, 2000)*/

console.log('我是global对象下面的console.log方法输出的内容');
// 这个执行后2s才会输出下面的123

setTimeout(function() {
    console.log('123');
}, 2000)