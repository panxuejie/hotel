const express=require();
const pool=require('../pool.js');
const querystring=require('querystring');
var router=express.Router();

router.post('/login',function(req,res){
	var $uname=req.body.uname;
	var $upwd=req.body.upwd;
	if(!$uname){
		res.send('用户名不能为空');
		return;
	}
	var sql='select* from hot_user where uname=?and upwd=?'
	pool.query(sql,[$uname,$upwd],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send('登陆成功');
		}else{res.send('登陆失败')};
	})
});


router.post('/reg',function(req,res){
	/*req.on('data',function(buf){
		var body=buf.toString();
		var obj=querystring.parse(body);
		console.log(obj);
	});*/
	var ww=req.body;
	var $uname=ww.uname;
	if($uname==''){
		res.send({code:401,msg:'uname required'});
		return;//阻止程序继续往后执行
		};
	
	var $upwd=ww.upwd;
	if(!$upwd){
		res.send({code:402,msg:'upwd required'});
		return;};
	
	pool.query('insert into hot_user values(?,?)',[$uname,$upwd],function(err,result){
		if(err)throw err;
		//判断affectedRows是否大于0
		if(result.affectedRows>0){
			res.send({code:200,msg:'reg success'});
			
		};
		
	});
	

	res.send('注册成功');
});
module.exports=router;