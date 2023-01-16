const User = require('../model/User');
const Post = require("../model/Post");
const mongoose = require("mongoose");
const objectId =  mongoose.Types.ObjectId;

const getAllUsers = async (req, res) => {
    const users = await User.find().select("-password");
    if (!users) return res.status(204).json({ 'message': 'No users found' });
    res.json(users);
}

const updateUser = async (req, res) => {
    const id = req.params.id;
    console.log('id', id)

    console.log('theme--------------------', req.body.theme)
    const {theme, image, content, profilePicture} = req.body;

    if (!id) {
        return res.status(400).json({ 'message': 'ID parameter is required.' });
    }

    const user = await User.findOne({ _id: id }).exec();
    if (!user) {
        return res.status(204).json({ "message": `No user matches ID ${req.body.id}.` });
    }

    if (theme==="light") user.bannerImageLight = image || user.bannerImageLight;
    if (theme==="shadow") user.bannerImageShadow = image || user.bannerImageShadow;
    user.profilePicture = profilePicture || user.profilePicture;
    user.bio = content || user.bio;


    const result = await user.save();
    res.json({"messgae":"user updated"});
}

const deleteUser = async (req, res) => {
    if (!req?.body?.id) return res.status(400).json({ "message": 'User ID required' });
    const user = await User.findOne({ _id: req.body.id }).exec();
    if (!user) {
        return res.status(204).json({ 'message': `User ID ${req.body.id} not found` });
    }
    const result = await user.deleteOne({ _id: req.body.id });
    res.json(result);
}

const getUser = async (req, res) => {
    const id = objectId(req.params.id);
    if (!req?.params?.id) return res.status(400).json({ "message": 'User ID required' });
    const user = await User.findOne({_id: id}).select("-password").select("-roles").exec();
    if (!user) {
        return res.status(204).json({ 'message': `User ID ${req.params.id} not found` });
    }
    res.json(user);
}

module.exports = {
    getAllUsers,
    updateUser,
    deleteUser,
    getUser
}