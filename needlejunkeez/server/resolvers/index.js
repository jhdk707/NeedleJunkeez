// const albumResolvers = require("./albumResolvers");
// const { createAlbum } = require("./createAlbum");

// const resolvers = {
//   Query: {
//     // Existing query resolvers...
//   },
//   Mutation: {
//     createAlbum,
//     // Other mutation resolvers...
//   },
// };

// module.exports = resolvers;

const albumResolver = require("./albumResolver");

const resolvers = {
  Query: {
    // Existing query resolvers...
  },
  Mutation: {
    ...albumResolver, // Spread the albumResolver object
    // Other mutation resolvers...
  },
};

module.exports = resolvers;
