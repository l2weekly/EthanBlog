/**
 * reply.js
 *
 * User: ethanh
 * Email: l2weekly.cn@gmail.com
 * Date: 2015-01-06
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var replySchema = new Schema({
	article: ObjectId,
	content: String,
	author: String,
	post_at: {type: Number, default: new Date().getTime()},
	qoute: ObjectId
});

mongoose.model('Reply', replySchema);