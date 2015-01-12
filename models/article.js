/**
 * article.js
 *
 * User: ethanh
 * Email: l2weekly.cn@gmail.com
 * Date: 2015-01-06
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var articleSchema = new Schema({
	title: String,
	content: String,
	create_at: {type: Number, default: new Date().getTime()},
	update_at: {type: Number, default: new Date().getTime()},
	reply_count: {type: Number, default: 0},
	visit_count: {type: Number, default: 0},
	is_top: {type: Boolean, default: false},
	tag: [ObjectId]
});

mongoose.model('Article', articleSchema);