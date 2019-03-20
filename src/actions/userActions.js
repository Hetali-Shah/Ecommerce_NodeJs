const UsersModel = require('../model/users');


module.exports = {

  getAllUser: function (req,res) {
    UsersModel.getAll().then((userRes) => {
      res.json({status: true, data: userRes})
    })

  },

  signupUser: function (req, res) {
    UsersModel.findByEmail(req.body.email).then((data) => {
      if(Object.keys(data).length > 0) {
        res.json({status:false,message:'Email already used!'});
      } else {
        const {firstName, lastName, email, password } = req.body;
        const userData = {
          firstName,
          lastName,
          email,
          password,
          isVerified:true,
        };
        UsersModel.insert(userData).then((userRes) => {
          res.json({status: true, data:userRes, message:'Sing up success!'})
        });
      }
    });
  },

  logInUser: async function (req, res) {
    const { email, password } = req.body;
    await UsersModel.findByCredential(email, password).then((loginRes) => {
        if(Object.keys(loginRes).length > 0) {
          if(!loginRes.isVerified) {
            res.json({status:false, message: 'Please verify your account'})
          } else {
            res.json({status:true, data:loginRes, message:'Login Successfully !!!'})
          }
        } else {
          res.json({status:false, message:'Invalid Login'})
        }
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
    const { id } = req.params;

    UsersModel.update(id, req.body).then((userRes) => {
      res.json({status: true, message:'Update SuccessFully!!!.... ', data:userRes})
    })

  },
};
