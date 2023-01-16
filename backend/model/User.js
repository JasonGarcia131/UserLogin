const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    roles: {
        User: {
            type: Number,
            default: 2001
        },
        Editor: Number,
        Admin: Number
    },
    password: {
        type: String,
        required: true
    },
    horoscopeSign: {
        type: String,
        required: true
    },
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
    profilePicture: {
        type: String,
        default: "https://images.unsplash.com/photo-1609726121380-243fcdbb1935?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y3Jlc2NlbnQlMjBtb29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
    },
    bio: {
        type: String,
        default: "About Me"
    },
    bannerImageLight: {
        type: String,
        default: "https://www.pixelstalk.net/wp-content/uploads/2016/08/Free-Universe-Backgrounds.jpg"
    },
    bannerImageShadow: {
        type: String,
        default: "https://images.unsplash.com/photo-1616712134411-6b6ae89bc3ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    },
    refreshToken: String
});

module.exports = mongoose.model('User', userSchema);