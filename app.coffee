express = require 'express'
path = require 'path'
favicon = require 'serve-favicon'
logger = require 'morgan'
cookieParser = require 'cookie-parser'
bodyParser = require 'body-parser'
ejs = require 'ejs'

routes = require './web_router'

config = require 'config'

app = express()

app.set 'port', process.env.PORT || config.port

# 模板引擎设置
app.set 'views', path.join __dirname, 'views'
app.engine '.html', ejs.__express
app.set 'view engine', 'html'

# app.use favicon __dirname + '/public/favicon.ico'
app.use logger 'dev'
app.use bodyParser.json()
app.use bodyParser.urlencoded
	extended: false
app.use bodyParser
app.use cookieParser
app.use express.static path.join __dirname, 'public'

app.use '/', routes

app.use (req, res, next
)
>
err = new Error 'not found'
err.status = 404
next err
