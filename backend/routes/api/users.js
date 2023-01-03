const express = require('express');
const router = express.Router();
const usersController = require('../../controllers/usersController');
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');

router.route('/')
    .get(verifyRoles(ROLES_LIST.Admin),usersController.getAllUsers)
    .delete(usersController.deleteUser)

router.route('/:id')
    .get(usersController.getUser);

router.route('/:id')
    .put(verifyRoles(ROLES_LIST.User), usersController.updateUser)


module.exports = router;