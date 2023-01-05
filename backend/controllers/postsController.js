const { mongo, default: mongoose } = require('mongoose');
const Post = require('../model/Post');
const User = require('../model/User');
const objectId = mongoose.Types.ObjectId;

const getAllPosts = async (req, res) => {
    const posts = await Post.find();
    if (!posts) return res.status(204).json({ 'message': 'No Posts found.' });
    res.json(posts);
}

const getUserPosts = async (req, res) => {

    const id = req.params.id;

    const posts = await Post.find({author: id}).sort({createdAt: -1}).populate('author');

    if (!posts) return res.status(204).json({ 'message': 'No Posts found.' });
    res.json(posts);
}

const createPost = async (req, res) => {
    const {id, postTheme, content, isPrivate} = req.body

    if (!id || !content) {
        return res.status(400).json({ 'message': 'id and content are required' });
    }

    try {

        const result = await Post.create({
            author: req.body.id,
            content: req.body.content,
            theme: req?.body?.postTheme,
            isPrivate: req?.body?.isPrivate
        });

        res.status(201).json(result);
    } catch (err) {
        console.error(err);
    }
}

const updatePost = async (req, res) => {
    if (!req?.body?.id) {
        return res.status(400).json({ 'message': 'ID parameter is required.' });
    }

    const post = await Post.findOne({ _id: req.body.id }).exec();
    if (!post) {
        return res.status(204).json({ "message": `No post matches ID ${req.body.id}.` });
    }
    if (req.body?.firstname) post.firstname = req.body.firstname;
    if (req.body?.lastname) post.lastname = req.body.lastname;
    const result = await post.save();
    res.json(result);
}

const deletePost = async (req, res) => {
    if (!req?.body?.id) return res.status(400).json({ 'message': 'Post ID required.' });

    const post = await Post.findOne({ _id: req.body.id }).exec();
    if (!post) {
        return res.status(204).json({ "message": `No post matches ID ${req.body.id}.` });
    }
    const result = await post.deleteOne(); //{ _id: req.body.id }
    res.json(result);
}

const getPost = async (req, res) => {
    if (!req?.params?.id) return res.status(400).json({ 'message': 'post ID required.' });

    const post = await Post.findOne({ _id: req.params.id }).exec();
    if (!post) {
        return res.status(204).json({ "message": `No post matches ID ${req.params.id}.` });
    }
    res.json(post);
}

module.exports = {
    getAllPosts,
    getUserPosts,
    createPost,
    updatePost,
    deletePost,
    getPost
}

//Cast to ObjectId failed for value "undefined" (type string) at path "author" for model "Post"