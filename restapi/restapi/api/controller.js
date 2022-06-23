var mongoose = require('mongoose');
var Users = mongoose.model('Users')


exports.getUsers = (req, res) => {

  Users.find({}, (err, data) => {
  
      if (!data) {
        res.send(false)
      }
      else {
  
        res.send(data)
      }
    })
  }