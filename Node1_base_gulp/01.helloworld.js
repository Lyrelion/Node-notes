var first = 'hello nodejs';
console.log(first);

function fn() {
    console.log('fn函数被调用了');
}

fn();

for (var i = 0; i < 5; i++) {
    console.log(i);
}

if (true) {
    console.log('123');
}

console.log('文件再次被修改了') // 使用 nodemon命令 替代 node命令 执行文件
    // 修改的文件被保存后，nodemon命令 会自动重新执行文件，执行结束后输出下面的内容：
    // [nodemon] clean exit - waiting for changes before restart （挂起）
    // 该命令执行过一次文件后会自动挂起，等待重新执行该文件
    // 如果需要退出，按 ctrl+c 表示打断当前命令，就会自动跳转回 node命令了