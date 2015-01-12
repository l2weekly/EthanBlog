/**
 * manager.js
 *
 * User: ethanh
 * Email: l2weekly.cn@gmail.com
 * Date: 2015-01-06
 */
var mongoose = require('mongoose');

var config = require('../config');

mongoose.connect(config.db, function(err) {
	if (err) {
		console.error('connect to %s failed:', config.db, err.message);
		process.exit(1);
	}
	console.log('connect to mongodb successful');
});

require('./category');
require('./tag');
require('./article');
require('./reply');

module.exports.Category = mongoose.model('Category');
module.exports.Tag = mongoose.model('Tag');
module.exports.Article = mongoose.model('Article');
module.exports.Reply = mongoose.model('Reply');
