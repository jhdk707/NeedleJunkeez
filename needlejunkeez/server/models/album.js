const mongoose = require("mongoose");
const albumSchema = new mongoose.Schema({
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
