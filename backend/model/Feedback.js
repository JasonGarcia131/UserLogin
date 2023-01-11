const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// author, content, theme, created at, updated at

const feedbackSchema = new Schema({
    content:  {
        type: String,
        required: true
    },
    createdAt:  {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Feedback', feedbackSchema);