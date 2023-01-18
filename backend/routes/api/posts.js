const express = require('express');
const router = express.Router();
const PostsController = require('../../controllers/PostsController');
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');
const paginate = require("../../middleware/paginate");
const verifyJWT = require("../../middleware/verifyJWT");
const Post = require("../../model/Post");

router.route('/')
    .get(PostsController.getAllPosts)
    .post([verifyJWT, verifyRoles(ROLES_LIST.User)], PostsController.createPost)

router.route('/:id')
    .delete([verifyJWT, verifyRoles(ROLES_LIST.User)], PostsController.deletePost);

router.route('/paginate')
    .get(paginate(Post), PostsController.getUserPosts);

router.route('/paginate/public')
    .get(paginate(Post), PostsController.getUserPosts);


module.exports = router;