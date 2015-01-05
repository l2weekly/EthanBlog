var Q = require('q');

var mongoose = require('../models/index');
var Exception = require('../lib/exception');

module.exports = {
	Article: index.Article,
	save: function(obj) {
		var deferred = Q.defer();

		var instance = new this.Article(obj);
		instance.save(function(err, article) {
			if (err) {
				throw new Exception(Exception.DBError, err.message);
			}

			deferred.resolve(article);
		});

		return deferred.promise;
	},
	remove: function(obj) {
		var deferred = Q.defer();

		this.Article.remove(obj, function(err, article) {
			if (err) {
				throw new Exception(Exception.DBError, err.message);
			}
			deferred.resolve(article);
		});

		return deferred.promise;
	},
	update: function(obj) {
		var deferred = Q.defer();

		this.Article.update({_id: obj._id}, obj, {}, function(err, article) {
			if (err) {
				throw new Exception(Exception.DBError, err.message);
			}
			deferred.resolve(article);
		});

		return deferred.promise;
	},
	findUnique: function(obj) {
		var deferred = Q.defer();

		this.Article.find(obj || {}, function(err, articles) {
			if (err) {
				throw new Exception(Exception.DBError, err.message);
			}
			deferred.resolve(articles[0]);
		});

		return deferred.promise;
	},
	findById: function(_id) {
		var deferred = Q.defer();

		this.Article.findById(_id, function(err, article) {
			if (err) {
				throw new Exception(Exception.DBError, err.message);
			}
			deferred.resolve(article);
		});

		return deferred.promise;
	},
	findByCondition: function(obj) {
		var deferred = Q.defer();

		this.Article.find(obj || {}, function(err, articles) {
			if (err) {
				throw new Exception(Exception.DBError, err.message);
			}
			deferred.resolve(articles);
		});

		return deferred.promise;
	}
};
