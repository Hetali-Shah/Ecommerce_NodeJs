const mongoose = require('mongoose');
const moment = require('moment')

const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String
});

const Users = mongoose.model('user', UserSchema);

module.exports = {

  insert: function (userData, callback) {
    new Users(userData).save(function (err, data) {
      callback((err) ? false : data)
    })
  }
}
