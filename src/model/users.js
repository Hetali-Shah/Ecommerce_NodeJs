const mongoose = require('mongoose');
const moment = require('moment')

const UserSchema = new mongoose.Schema({
  firstName: {type: String, default: 'first'},
  lastName: {type: String, default: 'last'},
});

const Users = mongoose.model('user', UserSchema);

module.exports = {

  insert: function (userData) {
    return new Promise((resolve) => {
      new Users(userData).save(function (err, data) {
        resolve((err) ? false : data)
      })
    })
  },

  getAll: function () {
    return new Promise((resolve) => {
      Users.find({}, function (error, data) {
        resolve((error) ? [] : (data == null) ? [] : data)
      })
    })
  },

  findById: function (id) {
    return new Promise((resolve) => {
      Users.findById(id, function (error, data) {
        resolve((error) ? {} : (data == null) ? {} : data)
      })
    })
  },

  delete: function (id) {
    return new Promise((resolve) => {
      Users.findByIdAndRemove(id, function (error, data) {
        resolve((error) ? {} : (data == null) ? {} : data)
      })
    })
  },

  update: function (id, data) {
    return new Promise((resolve) => {
      this.findById(id).then((resData) => {
        if(Object.keys(resData).length > 0) {

          Object.keys(data).map(rKey => {
            resData[rKey] = data[rKey];
          });

          // resData['updatedAt'] = moment();

          resData.save( function(error, data){
            resolve((error) ? false : data);
          });
        } else {
          resolve(false);
        }
      });
    })
  },
};
