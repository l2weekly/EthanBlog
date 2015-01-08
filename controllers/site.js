/**
 * site.js
 *
 * User: ethanh
 * Email: l2weekly.cn@gmail.com
 * Date: 2015-01-06
 */
var services = require('../services');
var articleProxy = services.article;

var config = require('../config');

module.exports.index = function(req, res, next) {
	var currentPage = parseInt(req.query.page) || 1;

	var limit = config.limit;
	var opts = {
		skip: (currentPage - 1) * limit,
		limit: limit,
		sort: '-is_top -update_at'
	};

	articleProxy.findByConditionAsync(null, opts).then(function(resolve) {
		res.render('index', {
			articles: resolve
		});
	}).catch(function(err) {
		next(err);
	});
};
