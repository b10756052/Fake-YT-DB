const mongoose = require("mongoose");

const collectionSchema = new mongoose.Schema({
  id: { type: String },
  title: {
    type: String,
    required: true,
  },
  imgURL: {
    type: String,
    required: true,
  },
  videoURL: {
    type: String,
    required: true,
  },
  channelTitle: {
    type: String,
    required: true,
  },
  refUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Collection", collectionSchema);
