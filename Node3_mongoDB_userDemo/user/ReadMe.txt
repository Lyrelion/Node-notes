1.创建网站服务器、添加请求事件、监听端口

2.建立数据库连接
	先要启动数据库服务 net start mongoDB
	然后下载第三方模块 npm install mongoose 

3.构造表，并导入数据 .json文件
 	mongoimport -d playground -c users --file ./user.json

4.对数据进行增删改查

5.model文件夹：存放了数据库连接、表的创建

=============================================================

1.初次拿到文件，打开命令行：npm install

2.net start mongoDB、node app.js

3.打开网页，输入：localhost:3000/list