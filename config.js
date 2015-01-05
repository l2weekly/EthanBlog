/**
 * config.js
 *
 * User: ethanh
 * Email: l2weekly.cn@gmail.com
 * Date: 2015-01-05
 */
var path = require('path');

var config = {
	// 服务器运行端口
	port: 3000,

	// 数据库连接字符串
	db: 'mongodb://ethan:2583832x@127.0.0.1/ethanblog'
};

module.exports.config = config;