var router = require('koa-router')();
var redis = require("redis");//导入redis
var client = redis.createClient();

client.on("err",function(err){
	console.log('Error'+err);
});
// router.post('/',async function (ctx, next) {

//  let loginbean = ctx.session.loginbean;
//   //console.log('loginbean:'+loginbean);
//   if(!loginbean){
//   	ctx.body='登陆过期';
//   	return;

//    }
//    ctx.body="1";
// })
router.post('/go',async function (ctx, next){
	
 let loginbean = ctx.session.loginbean;
  //console.log('loginbean:'+loginbean);
  if(!loginbean){
  	ctx.body='登陆过期';
  	return;

   }
  let room = ctx.request.body.room;
  console.log(room);
   let roomnum = await new Promise(function(resolve,reject){
      client.hget(room,"num",function(err,rs){
       	resolve(rs);
       })
      })
   if (roomnum<3){
   	 await client.hincrby(room,"num",1,function(err,rs){
   	 	if (err) {
   	 		console.log(err);
   	 	}
   	})
   
 let msg={};
  msg.id = loginbean.id;
  msg.nicheng = loginbean.nicheng;
  msg.room = room;
  ctx.body=msg;
}else{
	ctx.body=0;
}
})

module.exports = router;