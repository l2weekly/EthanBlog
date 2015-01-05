mongoose = require 'mongoose'

Schema = mongoose.Schema

articleSchema = new Schema
  title: String
  content: String
  create_at: {type: Number, default: new Date().getTime()}
  update_at: {type: Number, default: new Date().getTime()}
  reply_count: {type: Number, default: 0}
  visit_count: {type: Number, default: 0}
  tags: [String]
  is_top: Boolean

mongoose.model 'Article', articleSchema