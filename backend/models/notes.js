const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const noteSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  comment: [{
    type: Schema.Types.ObjectId,
    ref: "Comment"
  }],
  author: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Note = mongoose.model("notes", noteSchema);
