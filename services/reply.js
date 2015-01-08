var Reply = require('../models').Reply;

module.exports = {
	save: function(obj) {
		var reply = new Reply(obj);
		reply.save(function(err, reply) {
			if (err) {
				throw err;
			}
			return reply;
		});
	},
	remove: function(_id) {
		Reply.findByIdAndRemove(_id);
	},
	update: function(obj) {
		Reply.update({_id: obj._id}, obj, {}, function(err, numberAffected, reply) {
			if (err) {
				throw err;
			}
			return reply;
		});
	},
	findByArticle: function(_id) {
		Reply.find({article: _id}, null, function(err, replies) {
			if (err) {
				throw err;
			}
			return replies;
		});
	}
};
