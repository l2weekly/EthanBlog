// Generated by CoffeeScript 1.8.0
(function() {
  var app, bodyParser, config, cookieParser, ejs, express, favicon, logger, path, routes;

  express = require('express');

  path = require('path');

  favicon = require('serve-favicon');

  logger = require('morgan');

  cookieParser = require('cookie-parser');

  bodyParser = require('body-parser');

  ejs = require('ejs');

  routes = require('./web_router');

  config = require('config');

  app = express();

  app.set('port', process.env.PORT || config.port);

  app.set('views', path.join(__dirname, 'views'));

  app.engine('.html', ejs.__express);

  app.set('view engine', 'html');

  app.use(logger('dev'));

  app.use(bodyParser.json());

  app.use(bodyParser.urlencoded({
    extended: false
  }));

  app.use(bodyParser);

  app.use(cookieParser);

  app.use(express["static"](path.join(__dirname, 'public')));

  app.use('/', routes);

  app.use(function(req, res, next) {
    var err;
    return err = new Error('not found');
  });

}).call(this);

//# sourceMappingURL=app.js.map
