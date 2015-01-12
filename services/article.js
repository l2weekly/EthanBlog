var Article = require('../models').Article;

module.exports.save = function(obj, callback) {
	var article = new Article(obj);
	article.save(function(err, article) {
		return callback(err, article);
	});
};

module.exports.remove = function(_id, callback) {
	Article.findByIdAndRemove(_id, function(err) {
		return callback(err);
	});
};

module.exports.update = function(obj, callback) {
	Article.update({_id: obj._id}, obj, {}, function(err, article) {
		return callback(err, article);
	});
};

module.exports.findById = function(_id, callback) {
	Article.findById(_id, function(err, article) {
		return callback(err, article);
	});
};

module.exports.findByQuery = function(obj, opts, callback) {
	Article.find(obj || {}, null, opts || {}, function(err, articles) {
		return callback(err, articles);
	});
};
