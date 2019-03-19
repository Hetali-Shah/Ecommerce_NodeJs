const express = require('express');
const router = express.Router();
const userAction = require('../actions/userActions');

router.get('/', userAction.findAll);
router.get('/:id', userAction.findById);
router.delete('/:id', userAction.delete);
router.post('/', userAction.signUpUser);

module.exports = router;
