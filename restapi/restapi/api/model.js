'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsersSchema = new Schema({
  email: {
    type: String,
    unique: true
  },
  username: {
    type: String
  },
  password: {
    type: String,
  }
});

module.exports = mongoose.model('Users', UsersSchema);