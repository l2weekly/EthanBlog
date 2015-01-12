var Reply = require('../models').Reply;

module.exports.save = function(obj, callback) {
	var reply = new Reply(obj);
	reply.save(function(err, reply) {
		return callback(err, reply);
	});
};

module.exports.remove = function(_id, callback) {
	Reply.findByIdAndRemove(_id, function(err) {
		return callback(err);
	});
};

module.exports.update = function(obj, callback) {
	Reply.update({_id: obj._id}, obj, {}, function(err, reply) {
		return callback(err, reply);
	});
};

module.exports.findByArticle = function(_id, callback) {
	Reply.find({article: _id}, null, function(err, replies) {
		return callback(err, replies);
	});
};
