/**
 * tag.js
 *
 *
 * User: ethanh
 * Email: l2weekly.cn@gmail.com
 * Date: 2015-01-12
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var tagSchema = new Schema({
	tag: String
});

mongoose.model('Tag', tagSchema);