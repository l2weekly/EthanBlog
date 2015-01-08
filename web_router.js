/**
 * web_router.js
 *
 * User: ethanh
 * Email: l2weekly.cn@gmail.com
 * Date: 2015-01-06
 */
var express = require('express');
var router = express.Router();

var site = require('./controllers/site');


// 路由映射 begin
router.get('/', site.index);
// 路由映射 end

module.exports = router;