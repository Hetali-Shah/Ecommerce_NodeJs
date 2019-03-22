const CategoryModel = require ('../model/category');

module.exports = {

  addCategory : function (req,res) {
    const {title} = req.body;
    const categoryData = {
     title,
      isVerified:true,
    };
    CategoryModel.insert(categoryData).then((categoryRes) => {
      res.json({status: true, data:categoryRes, message:'Created SuccessFully!'})
    })
  },

  getCategoryByTitle : function (req, res) {
    const { title } = req.params;
    CategoryModel.findByTitle(title).then((categoryRes) => {
      res.json({status: true, data:categoryRes})
    })
  },


  getAllCategory :function (req,res) {
    CategoryModel.getAll().then((categoryRes) => {
      res.json({status: true, data: categoryRes})
    })
  },

  deleteCategoryById:function (req, res) {
    const { id } = req.params;
    CategoryModel.delete(id).then((response) => {
      res.json({status: true, message:'Delete SuccessFully!!!.... '})
    })
  },

  updateCategoryById:function (req, res) {
    const { id } = req.params;

    CategoryModel.update(id, req.body).then((categoryRes) => {
      res.json({status: true, message:'Update SuccessFully!!!.... ', data:categoryRes})
    })

  },
}
