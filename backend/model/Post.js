const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// author, content, theme, created at, updated at

const postSchema = new Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        required: true
    },
    content:  {
        type: String,
        required: true
    },
    theme:  {
        type: String,
        required: true,
        default: "light"
    },
    isPrivate: {
        type: Boolean,
        default: false
    },
    createdAt:  {
        type: Date,
        default: Date.now()
    },
    updatedAt:  {
        type: Date,
        default: Date.now()
    },
});

module.exports = mongoose.model('Post', postSchema);