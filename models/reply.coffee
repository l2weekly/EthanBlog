mongoose = require 'mongoose'

Schema = mongoose.Schema
ObjectID = Schema.ObjectId

replySchema = new Schema
  article_id: ObjectID
  content: String
  reply_at: {type: Number, default: new Date().getTime()}

mongoose.model 'Reply', replySchema