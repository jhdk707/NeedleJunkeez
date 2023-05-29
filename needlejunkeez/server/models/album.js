// const mongoose = require("mongoose");

// const albumSchema = new mongoose.Schema({
//   artist: { type: String, required: true },
//   album: { type: String, required: true },
//   tracks: [
//     {
//       name: { type: String, required: true },
//       length: { type: String, required: true },
//     },
//   ],
//   releaseDate: { type: Date, required: true },
//   genre: { type: String, required: true },
// });

// const Album = mongoose.model("Album", albumSchema);

// module.exports = Album;

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
