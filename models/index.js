var mongoose = require('mongoose');

var dbUrl = require('../config').config.db || {};

// 连接数据库
mongoose.connect(dbUrl).then(function(resolved) {
	console.log('mongodb connected success');
}, function(rejected) {
	if (rejected) {
		console.error('mongodb connected failed:', rejected.message);
	}
});

/**
 * 文章结构定义
 * @type {*|Model}
 */
module.exports.Article = mongoose.model('Article', {

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

var Schema = mongoose.Schema;

var articleSchema = new Schema({
	title: String,
	content: String,
	create_at: {type: Number, default: new Date().getTime()},
	update_at: {type: Date, default: new Date().getTime()},
	reply_count: {type: Number, default: 0},
	visit_count: {type: Number, default: 0},
	tags: [String]
});

mongoose.Model('Article', articleSchema);
