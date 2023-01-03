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
    posts: [{
        postTheme: {
            type: String,
            default: "light"
        },
        post: String
    }],
    profilePicture: String,
    bio: {
        type: String,
        default: "About Me"
    },
    friends: {
        following: [{
            followingUserId: Number,
            followingUserName: String,
            isFollowBack: {
                type: Boolean,
                default: false
            }
        }],
        followers: [{
            followerUserId: Number,
            followerUserName: String,
            isFollowBack: {
                type: Boolean,
                default: false
            }
        }]
    },
    refreshToken: String
});

module.exports = mongoose.model('User', userSchema);