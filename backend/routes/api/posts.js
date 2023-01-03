const express = require('express');
const router = express.Router();
const PostsController = require('../../controllers/PostsController');
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');

router.route('/')
    .get(PostsController.getAllPosts)
    .post(PostsController.createPost)
    .put(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), PostsController.updatePost)
    .delete(verifyRoles(ROLES_LIST.Admin), PostsController.deletePost);

router.route('/:id')
    .get(PostsController.getUserPosts);

module.exports = router;