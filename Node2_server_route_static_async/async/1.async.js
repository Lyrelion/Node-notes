console.log('before');

setTimeout(function() {
        console.log('last');
    }, 2000) // 定时器作为 异步API，不会阻碍后续代码执行，即先输出after，再输出last

console.log('after');

// before after last