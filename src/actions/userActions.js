const UsersModel = require('../model/users');


module.exports = {

  getAllUser: function (req,res) {
    UsersModel.getAll().then((userRes) => {
      res.json({status: true, data: userRes})
    })

  },

  signUpUser: function (req, res) {
    UsersModel.findByEmail(req.body.email).then((data) => {
      if(Object.keys(data).length > 0) {
        res.json({status:false,message:'Email already used!'});
      } else {
        const {firstName, lastName, email, password } = req.body;
        const userData = {
          firstName,
          lastName,
          email,
          password
        };
        UsersModel.insert(userData).then((userRes) => {
          res.json({status: true, data:userRes})
        });
      }
    });
  },

  getUser: function (req, res) {
    const { id } = req.params;
    UsersModel.findById(id).then((userRes) => {
      res.json({status: true, data:userRes})
    })
  },

  deleteUserById:function (req, res) {
    const { id } = req.params;
    UsersModel.delete(id).then((response) => {
      res.json({status: true, message:'Delete SuccessFully!!!.... '})
    })

  },

  updateUserById:function (req, res) {
    const { id } = req.params;

    UsersModel.update(id, req.body).then((userRes) => {
      res.json({status: true, message:'Update SuccessFully!!!.... ', data:userRes})
    })

  },
};
