var mongoose = require('mongoose');


var dbConfig = require('../config').mongodb || {};

var url = dbConfig.url;
var host = dbConfig.host;
var port = dbConfig.port;
var database = dbConfig.database;
var user = dbConfig.user;
var pwd = dbConfig.pwd;

var dbUrl = '';

// 连接字符串
if (url) {
	dbUrl = url;
} else {
	dbUrl = 'mongodb://';
	if (user && pwd) {
		dbUrl += user + ':' + pwd + '@' + host + ':' + port + '/' + database;
	} else {
		dbUrl += host + ':' + port + '/' + database;
	}
}

// 连接数据库
mongoose.connect(dbUrl);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error:'));
db.once('open', function() {
	console.log('mongodb connection was opened');
});

/**
 * 文章结构定义
 * @type {*|Model}
 */
module.exports.Article = mongoose.model('Article', {
	title: String,
	postDate: {type: Date, default: Date.now()},
	content: String,
	viewCount: {type: Number, default: 0},
	tags: [String]
});

/**
 * 回复结构定义
 * @type {*|Model}
 */
module.exports.Reply = mongoose.model('Reply', {
	postDate: {type: Date, default: Date.now()},
	content: String,
	quote: [{
		content: String,
		postDate: Date
	}]
});

