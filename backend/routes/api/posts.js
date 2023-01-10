const express = require('express');
const router = express.Router();
const PostsController = require('../../controllers/PostsController');
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');
const paginate = require("../../middleware/paginate");
const Post = require("../../model/Post");

router.route('/')
    .get(PostsController.getAllPosts)
    .post( PostsController.createPost)
    .put(verifyRoles(ROLES_LIST.User), PostsController.updatePost)
    .delete(verifyRoles(ROLES_LIST.User), PostsController.deletePost);

router.route('/:id')
    .delete(verifyRoles(ROLES_LIST.User), PostsController.deletePost);

router.route('/paginate')
    .get(paginate(Post), PostsController.getUserPosts);


module.exports = router;