const User = require('../model/User');

const getAllUsers = async (req, res) => {
    console.log("hit all users route")
    const users = await User.find().select("-password");
    if (!users) return res.status(204).json({ 'message': 'No users found' });
    res.json(users);
}

const updateUser = async (req, res) => {
    console.log("hit update route")
    const post = req.body.post
    console.log("post from req.body", post)
    const id = req.params.id;
    console.log("id from update backend", id)

    if (!id) {
        return res.status(400).json({ 'message': 'ID parameter is required.' });
    }

    const user = await User.findOne({ _id: id }).exec();
    if (!user) {
        return res.status(204).json({ "message": `No user matches ID ${req.body.id}.` });
    }

    const allPosts = user.posts;
    console.log("all posts before push", allPosts);

    allPosts.push(post)

    console.log("all posts after push", allPosts);


    // if (req.body?.post) user.firstname = req.body.firstname;
    // const result = await User.save();
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
    if (!req?.params?.id) return res.status(400).json({ "message": 'User ID required' });
    const user = await User.findOne({ _id: req.params.id }).exec();
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