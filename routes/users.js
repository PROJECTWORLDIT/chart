var express = require('express');
var router = express.Router();

router.use(session({secret: "Shh, its a secret!", cookie: { expires: new Date(Date.now() + (30 * 86400 * 1000) )}}));
var userloginmodel = require('../model/userloginmodel');


router.get('/userlogout', function(req, res, next){
	console.log('Inisde Logout');
	req.session.destroy(function(err) {
		if(err) {
			console.log('Inside err:'+err);
		} else {
			console.log('Inside destroy:'+req.session);
			res.redirect('/');
		}
	});
});

router.get('/userlogin', function(req, res, next){
	res.render('userlogin');
});

router.post('/userlogin', function(req, res, next) {
  
  var username ;
  var msg ;
		  console.log('user login');
		 userloginmodel.userLogin(req.body, function(err, data) {
		 console.log('here '+data);
		    if (data === false || data === null || data =='') {
		       msg = 'Wrong username and password';
		       res.redirect('/userlogin?msg='+msg);
		    } else {
		      console.log('login is successful');
		       req.session.USERNAME = data[0].USERNAME;
		       req.session.EMAILID = data[0].EMAILID;
		       console.log('here '+data[0].EMAILID);
		       req.session.USERID = data[0].USERID; 
		       console.log(req.session);
		       res.redirect('/');
		    }
  		});
	});
/*
router.use(function(req, res, next) {
  console.log(req.path);
  console.log(req.session.EMAILID)
    if(req.session.EMAILID || req.path ==='/') {
      next();
    } else {
      res.redirect('/');
    }

});*/



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
