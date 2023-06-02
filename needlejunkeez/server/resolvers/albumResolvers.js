// const Album = require("../models/album");
// const User = require("../models/userSchema");

// // const createAlbum = async (_, args) => {
// //   try {
// //     const albumData = args.input; // Album data is passed as input to the resolver
// //     const album = new Album({
// //       uri: albumData.uri,
// //       name: albumData.name,
// //       artist: albumData.artist,
// //       coverArtUrl: albumData.coverArtUrl,
// //       // releaseYear: albumData.releaseDate.split("")[0],
// //       // releaseYear: albumData.releaseDate.split("")[0],
// //       // releaseDate: albumData.releaseDate, // Assign the releaseDate field directly
// //     });

// //     // Save the album to the database
// //     await album.save();
// //     console.log("Album saved to the database");

// //     // Return the created album to the client or perform any other necessary operations
// //     return album;
// //   } catch (error) {
// //     console.error("Error saving album to the database:", error);
// //     // Handle the error and return an appropriate response to the client
// //     throw new Error("Failed to create album");
// //   }
// // };

// // const albumResolvers = {
// //   Mutation: {
// //     createAlbum, // Add the createAlbum resolver to the Mutation object
// //   },
// // };

// const albumResolvers = {
//   Mutation: {
//     createAlbum: async (_, { input }) => {
//       // Implement the logic to create and save the album in the database
//       try {
//         const albumData = args.input; // Album data is passed as input to the resolver
//         const album = new Album({
//           uri: albumData.uri,
//           name: albumData.name,
//           artist: albumData.artist,
//           coverArtUrl: albumData.coverArtUrl,
//           // releaseYear: albumData.releaseDate.split("")[0],
//           // releaseYear: albumData.releaseDate.split("")[0],
//           // releaseDate: albumData.releaseDate, // Assign the releaseDate field directly
//         });

//         // Save the album to the database
//         await album.save();
//         console.log("Album saved to the database");

//         // Return the created album to the client or perform any other necessary operations
//         return album;
//       } catch (error) {
//         console.error("Error saving album to the database:", error);
//         // Handle the error and return an appropriate response to the client
//         throw new Error("Failed to create album");
//       }
//       const album = new Album(input);
//       await album.save();
//       return album;
//     },
//   },
// };

// module.exports = albumResolvers;

const Album = require("../models/album");
const User = require("../models/userSchema");

const albumResolvers = {
  Mutation: {
    createAlbum: async (_, { input }) => {
      try {
        const album = new Album({
          uri: input.uri,
          name: input.name,
          artist: input.artist,
          coverArtUrl: input.coverArtUrl,
        });

        await album.save();
        console.log("Album saved to the database");

        return album;
      } catch (error) {
        console.error("Error saving album to the database:", error);
        throw new Error("Failed to create album");
      }
    },
  },
};

module.exports = albumResolvers;
