var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
	title: String,
	postDate: Date.now(),
	content: String,
	viewCount: Number
});

var tagSchema = new Schema({
	name: String,
	articleCount: Number
});

var replySchema = new Schema({
	content: String,
	postDate: Date.now()
});

