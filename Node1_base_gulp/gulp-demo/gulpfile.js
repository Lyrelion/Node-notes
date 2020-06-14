const gulp = require('gulp'); // 引用 gulp模块
const fileinclude = require('gulp-file-include'); // 抽取公共代码
const htmlmin = require('gulp-htmlmin'); // 压缩 html文件
const less = require('gulp-less'); // 将less语法转换为css语法
const csso = require('gulp-csso'); // 压缩 css文件
const babel = require('gulp-babel'); // ES6 转换为 ES5
const uglify = require('gulp-uglify'); // 压缩 js文件
// 使用 gulp.task 建立任务
// 1.任务的名称
// 2.任务的回调函数
gulp.task('first', () => {
    console.log('茶茶子人生中的第一个gulp任务执行了');
    // 1.使用 gulp.src 获取要处理的文件
    gulp.src('./src/css/base.css')
        // gulp.dest：输出文件
        // 将要处理的代码包裹到 .pipe()中，相当于复制文件
        .pipe(gulp.dest('dist/css')); // dist目录下没有css文件夹，gulp会自动创建
});

// html任务
// 1.html文件中代码的压缩操作
// 2.抽取 html文件中的公共代码
gulp.task('htmlmin', () => {
    gulp.src('./src/*.html') // *.html 全部html文件
        // 先抽取公共代码 在 src目录中新建 common文件夹
        // 在 common文件夹中 新建 header.html 
        // 将所有 html文件中相同的头部剪切到 header.html中
        // 在被剪掉头部的 html文件中添加：@@include('./common/header.html')
        .pipe(fileinclude())
        // 再压缩 html文件代码
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'));
});

// css任务
// 1.less语法转换
// 2.css代码压缩
gulp.task('cssmin', () => {
    // 选择css目录下的所有less文件以及css文件
    gulp.src(['./src/css/*.less', './src/css/*.css'])
        // 将less语法转换为css语法
        .pipe(less())
        // 将css代码进行压缩
        .pipe(csso())
        // 将处理的结果进行输出
        .pipe(gulp.dest('dist/css'))
});

// js任务
// 1.es6代码转换
// 2.代码压缩
gulp.task('jsmin', () => {
    gulp.src('./src/js/*.js')
        // 先转换为 ES6语法
        .pipe(babel({
            // 判断当前运行环境 将代码转换为当前运行环境所支持的代码
            presets: ['@babel/env']
        }))
        // 再压缩 js文件
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
});

// 复制文件夹
gulp.task('copy', () => {

    gulp.src('./src/images/*')
        .pipe(gulp.dest('dist/images'));

    gulp.src('./src/lib/*')
        .pipe(gulp.dest('dist/lib'))
});

// 不同版本的gulp，对下面语法支持度是不同的 为了同时执行多个 gulp任务
// 最好的办法是 挨个任务执行，在命令行中输入：gulp htmlmin cssmin jsmin copy
// 构建任务 default+任务名数组，直接输入gulp 就可以执行所有任务
// gulp.task('default', ['htmlmin', 'cssmin', 'jsmin', 'copy']); // gulp3
// gulp.task('default', gulp.series('htmlmin', 'cssmin', 'jsmin', 'copy')) // gulp4