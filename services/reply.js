var Q = require('q');

var mongoose = require('../models/index');
var Exception = require('../lib/exception');

module.exports = {
	Reply: index.Reply,

	save: function(obj) {
		var deferred = Q.defer();

		var instance = new this.Reply(obj);
		instance.save(function(err, reply) {
			if (err) {
				throw new Exception(Exception.DBError, err.message);
			}

			deferred.resolve(reply);
		});

		return deferred.promise;
	},
	remove: function(obj) {
		var deferred = Q.defer();

		this.Reply.remove(obj, function(err, reply) {
			if (err) {
				throw new Exception(Exception.DBError, err.message);
			}
			deferred.resolve(reply);
		});

		return deferred.promise;
	},
	update: function(obj) {
		var deferred = Q.defer();

		this.Reply.update({_id: obj._id}, obj, {}, function(err, reply) {
			if (err) {
				throw new Exception(Exception.DBError, err.message);
			}
			deferred.resolve(reply);
		});

		return deferred.promise;
	},
	findByCondition: function(obj) {
		var deferred = Q.defer();

		this.Reply.find(obj || {}, function(err, replys) {
			if (err) {
				throw new Exception(Exception.DBError, err.message);
			}
			deferred.resolve(replys);
		});

		return deferred.promise;
	}
};
