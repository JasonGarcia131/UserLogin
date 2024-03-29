const express = require('express');
const router = express.Router();
const usersController = require('../../controllers/usersController');
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');
const verifyJWT = require("../../middleware/verifyJWT");

router.route('/')
    .get(usersController.getAllUsers)
    .delete(usersController.deleteUser)

router.route('/:id')
    .get(usersController.getUser)
    .put([verifyJWT, verifyRoles(ROLES_LIST.User)], usersController.updateUser)


module.exports = router;