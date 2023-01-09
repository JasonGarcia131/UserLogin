const express = require('express');
const router = express.Router();
const PostsController = require('../../controllers/PostsController');
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');
const paginate = require("../../middleware/paginate");
const Post = require("../../model/Post");

router.route('/')
    .get(PostsController.getAllPosts)
    .post(PostsController.createPost)
    .put(verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), PostsController.updatePost)
    .delete(PostsController.deletePost);

router.route('/:id')
    .delete(PostsController.deletePost);

router.route('/paginate')
    .get(paginate(Post), PostsController.getUserPosts);


module.exports = router;