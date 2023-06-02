const mongoose = require("mongoose");
const albumSchema = new mongoose.Schema({
  // userId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "User",
  //   required: true,
  // },
  uri: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  coverArtUrl: {
    type: String,
    required: true,
  },
});
const Album = mongoose.model("Album", albumSchema);
module.exports = Album;
