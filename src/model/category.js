const mongoose = require('mongoose');
const moment = require('moment');

const CategorySchema = new mongoose.Schema({
  title: String,
  isActive: Boolean,
  createdAt: Date,
  updatedAt: Date
});

const Category = mongoose.model('category', CategorySchema);

module.exports = {

  insert: function (categoryData) {
    return new Promise ((resolve) => {
      categoryData['createdAt'] = moment();
      categoryData['updatedAt'] = moment();
      new Category(categoryData).save(function (error, data) {
        resolve((error) ? false : data)
      })
    })
  },

  findByTitle: function (title) {
    return new Promise((resolve) => {
      Category.findOne({title}, function (error, data) {
        resolve((error) ? {} : (data == null) ? {} : data)
      })
    })
  },

  findById: function (id) {
    return new Promise((resolve) => {
      Category.findById(id, function (error, data) {
        resolve((error) ? {} : (data == null) ? {} : data)
      })
    })
  },

  getAll: function () {
    return new Promise((resolve) => {
      Category.find({}, function (error, data) {
        resolve((error) ? [] : (data == null) ? [] : data)
      })
    })
  },

  delete: function (id) {
    return new Promise((resolve) => {
      Category.findByIdAndRemove(id, function (error, data) {
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

          resData['updatedAt'] = moment();

          resData.save( function(error, data){
            resolve((error) ? false : data);
          });
        } else {
          resolve(false);
        }
      });
    })
  },

}
