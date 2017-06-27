var express = require('express');
var app = express.createServer();
var session = require('express-session');
var userModel = require('./public/models/userModel');


app.use(session({secret: 'recommand 128 bytes random string', // 建议使用 128 个字符的随机字符串
cookie: { maxAge: 10000 * 1000 }, //cookie生存周期60秒
resave: true,  //cookie之间的请求规则,假设每次登陆，就算会话存在也重新保存一次
saveUninitialized: true //强制保存未初始化的会话到存储器
}));  //这些是写在app.js里面的

app.configure(function(){
  app.use(express.methodOverride());
  app.use(express.bodyParser());
  app.use(app.router);
  app.set('view engine', 'ejs');
  app.set('views', __dirname + '/public');
  app.set('view options', {layout: false});
  app.set('basepath',__dirname + '/public');
});



app.configure('development', function(){
  app.use(express.static(__dirname + '/public'));
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  var oneYear = 31557600000;
  app.use(express.static(__dirname + '/public', { maxAge: oneYear }));
  app.use(express.errorHandler());
});

console.log("Web server has started.\nPlease log on http://127.0.0.1:3001/index.html");

app.post('/users/login', function(req, res){
    console.log('收到参数:'+req.body.email);
        
   email = req.body['email'];
    pwd = req.body['pwd'];
  userModel.findOne({where:{email:email,pwd:pwd}}).then(function(rs){
      if(rs){
        console.log('aaa');
       let loginbean={};
       console.log('bbb');
        loginbean.id=rs.id;
        console.log('aaa');
        loginbean.email=rs.email;
        loginbean.nicheng = rs.nicheng;
        console.log('==================================================================================');
        //console.log(rs.msgnum);
        req.session.loginbean = loginbean;

        //res.send('<script>alert("登陆成功");</script>');//这句话是大坑执行以后res.redirect()不会执行报错
        console.log('登陆成功');
       // console.log(rs);
      res.redirect('/hall');
     }
     else{
        res.send('<script>alert("email/密码错误");location.href="/";</script>');
      }//客户端跳转location.href='/'
     }).catch(function(err){
      console.log('失败');
      console.log('-------------=====================================================================================================');
      console.log(err);
      console.log('=======================================================================================================================');
    })
});

app.get('/hall', function(req, res){
    // loginbean = req.session.loginbean;
    // res.locals.loginbean = loginbean;
       res.render('hall');
});

app.post('/users/registered', function(req, res){
  userModel.create (req.body).then(function(rs){
    console.log('插入成功');
    //console.log(rs);
    //res.send('成功');
     res.redirect(307,'./login'); //带参数跳转到login里
  }).catch(function(err){
    console.log('==============================================================================');
    console.log(err);
    console.log('==============================================================================');
    //res.send('失败');
    if(err.errors[0].path=="emailuniq"){
      
     res.send('<script>alert("email重复");location.href="/";</script>');
    
    }else if (err.errors[0].path=="nichenguniq"){
       
       res.send('<script>alert("昵称重复");location.href="/";</script>');
    }else{
       
       res.send('数据库错误,稍后再试');
    }
  })
});


app.listen(3001);
