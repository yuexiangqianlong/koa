var router = require('koa-router')();

router.get('/getRoomList', async function (ctx, next) {
  let loginbean = ctx.session.loginbean;
  //console.log('loginbean:'+loginbean);
  if(!loginbean){
  	ctx.body='登陆过期';
  	return;
  }else{
  	ctx.body='登陆成功';
  }
  //ctx.body=[];
});

router.get('/newroom', async function (ctx, next) {
     let loginbean=ctx.session.loginbean;
     if (!loginbean) {
     	ctx.body="登陆过期";
     }
})
module.exports = router;