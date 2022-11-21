const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: String,
  category: String,
  content: String,
  image: String,
  video: String,
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", postSchema);
 