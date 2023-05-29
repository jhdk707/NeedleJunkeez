// // const { createAlbum } = require("./createAlbum");

// // const saveAlbum = async (parent, args, context) => {
// //   try {
// //     const albumData = args.input;
// //     const userId = context.userId;

// //     // Retrieve the current user
// //     const user = await User.findById(userId);

// //     // Create a new album document
// //     const album = new Album({
// //       uri: albumData.uri,
// //       name: albumData.name,
// //       artist: albumData.artist,
// //       coverArtUrl: albumData.coverArtUrl,
// //       releaseYear: albumData.releaseYear,
// //     });

// //     // Save the album to the database
// //     await album.save();

// //     // Add the album reference to the user's savedAlbums array
// //     user.savedAlbums.push(album);

// //     // Save the updated user document
// //     await user.save();

// //     console.log("Album saved to the database and linked to the user");

// //     return album;
// //   } catch (error) {
// //     console.error("Error saving album to the database:", error);
// //     throw new Error("Failed to save album");
// //   }

// // };

// const { createAlbum } = require("./createAlbum.js");

// const saveAlbum = async (parent, args, context) => {
//   try {
//     const albumData = args.input;
//     const userId = context.userId;

//     // Retrieve the current user
//     const user = await User.findById(userId);

//     // Create a new album document
//     const album = new Album({
//       uri: albumData.uri,
//       name: albumData.name,
//       artist: albumData.artist,
//       coverArtUrl: albumData.coverArtUrl,
//       releaseYear: albumData.releaseYear,
//     });

//     // Save the album to the database
//     await album.save();

//     // Add the album reference to the user's savedAlbums array
//     user.savedAlbums.push(album);

//     // Save the updated user document
//     await user.save();

//     console.log("Album saved to the database and linked to the user");

//     return album;
//   } catch (error) {
//     console.error("Error saving album to the database:", error);
//     throw new Error("Failed to save album");
//   }
// };

// module.exports = {
//   saveAlbum,
// };

// models/albumResolver.js

// const Album = require("../models/album");
// const User = require("../models/userSchema");

// const createAlbum = async (parent, args) => {
//   try {
//     const albumData = args.input; // Album data is passed as input to the resolver
//     const album = new Album({
//       uri: albumData.uri,
//       name: albumData.name,
//       artist: albumData.artists.items[0].profile.name,
//       coverArtUrl: albumData.coverArt.sources[0].url,
//       releaseYear: albumData.date.year,
//     });

//     // Save the album to the database
//     await album.save();
//     console.log("Album saved to the database");

//     // Return the created album to the client or perform any other necessary operations
//     return album;
//   } catch (error) {
//     console.error("Error saving album to the database:", error);
//     // Handle the error and return an appropriate response to the client
//     throw new Error("Failed to create album");
//   }
// };

// module.exports = {
//   createAlbum,
// };

// const Album = require("../models/album");
// const User = require("../models/userSchema");

// const createAlbum = async (parent, args) => {
//   try {
//     const albumData = args.input; // Album data is passed as input to the resolver
//     const album = new Album({
//       uri: albumData.uri,
//       name: albumData.name,
//       artist: albumData.artist,
//       coverArtUrl: albumData.coverArtUrl,
//       releaseYear: albumData.releaseDate.split("-")[0],
//     });

//     // Save the album to the database
//     await album.save();
//     console.log("Album saved to the database");

//     // Return the created album to the client or perform any other necessary operations
//     return album;
//   } catch (error) {
//     console.error("Error saving album to the database:", error);
//     // Handle the error and return an appropriate response to the client
//     throw new Error("Failed to create album");
//   }
// };

// module.exports = {
//   createAlbum,
// };

// const Album = require("../models/album");
// const User = require("../models/userSchema");

// const createAlbum = async (_, args) => {
//   try {
//     const albumData = args.input; // Album data is passed as input to the resolver
//     const album = new Album({
//       uri: albumData.uri,
//       name: albumData.name,
//       artist: albumData.artist,
//       coverArtUrl: albumData.coverArtUrl,
//       releaseYear: albumData.releaseDate.split("-")[0],
//     });

//     // Save the album to the database
//     await album.save();
//     console.log("Album saved to the database");

//     // Return the created album to the client or perform any other necessary operations
//     return album;
//   } catch (error) {
//     console.error("Error saving album to the database:", error);
//     // Handle the error and return an appropriate response to the client
//     throw new Error("Failed to create album");
//   }
// };

// module.exports = {
//   createAlbum,
// };

const Album = require("../models/album");
const User = require("../models/userSchema");

const createAlbum = async (_, args) => {
  try {
    const albumData = args.input; // Album data is passed as input to the resolver
    const album = new Album({
      uri: albumData.uri,
      name: albumData.name,
      artist: albumData.artist,
      coverArtUrl: albumData.coverArtUrl,
      // releaseYear: albumData.releaseDate.split("")[0],
      // releaseYear: albumData.releaseDate.split("")[0],
      // releaseDate: albumData.releaseDate, // Assign the releaseDate field directly
    });

    // Save the album to the database
    await album.save();
    console.log("Album saved to the database");

    // Return the created album to the client or perform any other necessary operations
    return album;
  } catch (error) {
    console.error("Error saving album to the database:", error);
    // Handle the error and return an appropriate response to the client
    throw new Error("Failed to create album");
  }
};

const albumResolvers = {
  Mutation: {
    createAlbum, // Add the createAlbum resolver to the Mutation object
  },
};

module.exports = albumResolvers;
