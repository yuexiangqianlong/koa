var router = require('koa-router')();

router.get('/', async function (ctx, next) {
	ctx.body='koa2';
  ctx.state = {
     title: 'koa2 title'
   };

   await ctx.render('index', {
   });
}) 
module.exports = router;
