//引入连接池
const pool=require('../pool.js');
//导入路由器
const querystring=require('querystring');
const express=require('express');
var app=express();


//创建路由器
var router=express.Router();

//往路由器中添加路由

router.post('/reg',function(req,res){
	/*req.on('data',function(buf){
		var body=buf.toString();
		var obj=querystring.parse(body);
		console.log(obj);
	});*/
	var ww=req.body;
	console.log(ww);
	var $uname=ww.uname;
	if($uname==''){
		res.send({code:401,msg:'uname required'});
		return;//阻止程序继续往后执行
		};
	
	var $upwd=ww.upwd;
	if(!$upwd){
		res.send({code:402,msg:'upwd required'});
		return;};
	
	
	pool.query('insert into hot_user values(null,?,?)',[$uname,$upwd],function(err,result){
		if(err)throw err;
		//判断affectedRows是否大于0
		if(result.affectedRows>0){
			res.send('<script>alert("注册成功")</script>');
			
		};
		
	});
	

});
//用户登陆路由,获取浏览器请求的数据，并且验证
router.post('/login',function(req,res){

	var obj=req.body;
	var $uname=obj.uname;
	var $upwd=obj.upwd;
	if(!$uname){
		res.send({code:401,msg:'uname required'});
		return;
	}
	if(!$upwd){
		res.send({code:402,msg:'upwd required'});
		return;
	}
	//查看数据库是否有这个用户
	pool.query('select * from hot_user where uname=? and upwd=?',[$uname,$upwd],function(err,result){
		if(err) throw err;
		//查询的结果是数组
		if(result.length>0){
			res.send("<script>alert('登录成功')</script>");
		}else{res.send({code:301,msg:'uname or upwd error'})};
	});
});

module.exports=router;