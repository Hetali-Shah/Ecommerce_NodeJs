const express = require ('express');
const  router = express.Router();
const categoryAction = require ('../actions/categoryActions')

router.post('/', categoryAction.addCategory);
router.get('/:title', categoryAction.getCategoryByTitle);
router.get('/', categoryAction.getAllCategory);
router.delete('/:id', categoryAction.deleteCategoryById);
router.put('/:id', categoryAction.updateCategoryById);

module.exports = router;
