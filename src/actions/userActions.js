const UsersModal = require('../model/users');


module.exports = {
  findAll: function (req,res) {
    res.send([{name:'wine1'}, {name:'wine2'}, {name:'wine3'}]);
  },

  findById: function (req, res) {
    res.send({id:req.params.id, name: "The Name", description: "description"});
  },

  delete: function (req, res) {
    res.send({id:req.params.id, name: "The Name", description: "description"});
  },
  signUpUser: function (req, res) {
    const {firstName, lastName} = req.body;
    res.json({firstName, lastName});

    //Create Users

    const userData = {
      firstName,
      lastName
    };
    UsersModal.insert(userData)

  }
};
