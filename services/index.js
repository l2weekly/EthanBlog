/**
 * index.js
 *
 * User: ethanh
 * Email: l2weekly.cn@gmail.com
 * Date: 2015-01-06
 */
var Promise = require('bluebird');

var promisifyAll = function(target) {
	return Promise.promisifyAll(target, {suffix: 'Async'});
};

module.exports.article = promisifyAll(require('./article'));
module.exports.reply = promisifyAll(require('./reply'));
