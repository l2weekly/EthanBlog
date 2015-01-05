/**
 * reply.js
 *
 * User: ethanh
 * Email: l2weekly.cn@gmail.com
 * Date: 2015-01-06
 */
var mongoose = require('mongoose');

var replySchema = new Schema({
	content: String,
	reply_at: {type: Number, default: new Date().getTime()},
	quote: [{
		content: String,
		postDate: Date
	}]
});