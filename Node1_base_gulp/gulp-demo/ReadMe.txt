得到的项目如果没有 node_modules文件夹，直接在根目录下打开命令行 

输入 npm install 

会根据.json文件 自动生成 node_modules文件夹

=======================================================================================

npm install gulp -下载 gulp第三方模块 得到 node_modules文件夹

编写任务 新建 gulpfile.js文件

将源文件拷贝到 src目录

被处理过的文件放在 dist目录

npm install gulp-cli -g 全局安装 gulp命令

=======================================================================================

插件名：插件作用（安装命令）

gulp-file-include：抽取公共文件（npm install gulp-file-include）

在 src目录中新建 common文件夹
在 common文件夹中 新建 header.html 将所有 html文件中相同的头部剪切到 header.html中
在被剪掉头部的 html文件中添加：@@include('./common/header.html')

gulp-htmlmin：html文件压缩（npm install gulp-htmlmin）


gulp-less： less语法转化（npm install gulp-less）


gulp-csso：css文件压缩（npm install gulp-csso）


gulp-bable：转换 ES6语法为 ES5（npm install gulp-babel @babel/core @babel/preset-env）

gulp-uglify：js文件压缩（npm install gulp-uglify）

=======================================================================================

browsersync 浏览器实时同步


可以同时下载多个插件：npm install 第三方插件 第三方插件 第三方插件...

=======================================================================================

生成 package.json文件：根目录下  npm init-y 记录版本项目依赖开发依赖别名等等等

生成 package-lock.json文件：
记录了模块与模块之间的依赖关系、模块版本、模块下载地址


锁定包的版本，确保不会因为包 版本不同 而产生问题  

加快下载速度，记录了项目所依赖的第三方包 和 下载地址

=======================================================================================
