/**
 * site.js
 *
 * User: ethanh
 * Email: l2weekly.cn@gmail.com
 * Date: 2015-01-06
 */
var Promise = require('bluebird');
var services = require('../services');
var config = require('../config');

var join = Promise.join;
var articleProxy = services.article;
var replyProxy = services.reply;

module.exports.index = function(req, res, next) {
	var currentPage = parseInt(req.query.page) || 1;

	var limit = config.limit;
	var opts = {
		skip: (currentPage - 1) * limit,
		limit: limit,
		sort: '-is_top -update_at'
	};

	articleProxy.findByQueryAsync(null, opts).map(function(article) {
		var pReplies = replyProxy.findByArticleAsync(article._id);

		return join(pReplies, function(replies) {
			article._doc['replies'] = replies;
			return {
				article: article
			};
		});
	}).then(function(obj) {
		res.render('index', {
			resObj: obj
		});
	}).catch(function(err) {
		next(err);
	});
};
