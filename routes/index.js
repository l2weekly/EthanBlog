var express = require('express');
var ArticleDao = require('../dao/article');
var Exception = require('../lib/exception');

var router = express.Router();

/* GET home page. */
router.get('/articles', function(req, res) {
	//var instance = new Article({
	//    title: 'test',
	//    content: 'testContent',
	//    tags: ['test', 'test1']
	//});
	//
	//ArticleDao.save(instance);

	ArticleDao.findByCondition().then(function(resolved) {
		res.json(resolved);
	}, function(rejected) {
		console.error(new Exception(Exception.DBError, rejected.message));
	});
});

router.get('/delete', function(req, res) {

});

router.get('/post', function doPost(req, res) {
	res.render('index', {
		title: 'wannabe'
	});
});

module.exports = router;
