const UsersModel = require('../model/users');


module.exports = {

  getAllUser: function (req,res) {
      UsersModel.getAll().then((userRes) => {
        res.json({status: true, data: userRes})
      })

  },

  signUpUser: function (req, res) {
      const {firstName, lastName} = req.body;
      const userData = {
        firstName,
        lastName
      };
      UsersModel.insert(userData).then((userRes) => {
        res.json({status: true, data:userRes})
      })
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
    const {...rest} = req.body;
    const { id } = req.params;

    UsersModel.update(id, ...rest).then((userRes) => {
      res.json({status: true, message:'Update SuccessFully!!!.... ', data:userRes})
    })

  },
};
