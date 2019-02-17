//导入路由器
const bodyParser=require('body-parser');
const userRouter=require('./routes/user.js');
const express=require('express');


//创建web服务器
var app=express();
app.listen(3000);
//使用body-parser中间件
app.use(bodyParser.urlencoded({
	extended:false
}));
//托管静态文件到public目录
app.use(express.static('public'));

//把路由器挂载到/user下
//访问路由/user/login  /user/reg
app.use('/user',userRouter);

//把商品路由器引入并挂载到/product下
//访问路由/product/list

