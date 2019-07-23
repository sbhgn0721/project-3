const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const commentSchema = new Schema({
    comment: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Comment = mongoose.model("comments", commentSchema);
