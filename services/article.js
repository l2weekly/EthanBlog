var Promise = require('bluebird');

var Article = require('../models').Article;

module.exports.save = function(obj) {
	var article = new Article(obj);
	article.save(function(err, article) {
		if (err) {
			throw err;
		}
		return article;
	});
};

module.exports.remove = function(_id) {
	Article.findByIdAndRemove(_id);
};

module.exports.update = function(obj) {
	Article.update({_id: obj._id}, obj, {}, function(err, article) {
		if (err) {
			throw err;
		}
		return article;
	});
};

module.exports.findById = function(_id) {
	Article.findById(_id, function(err, article) {
		if (err) {
			throw err;
		}
		return article;
	});
};

module.exports.findByCondition = function(obj, opts, callback) {
	Article.find(obj || {}, null, opts || {}, function(err, articles) {
		return callback(err, articles);
	});
};
