// const express = require("express");
// const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// require("dotenv").config();
// // const { ApolloServer } = require("apollo-server-express");
// const { ApolloServer, gql } = require("apollo-server-express");

// const path = require("path");
// const fs = require("fs");

// // Import your Mongoose models
// const Album = require("../server/models/album");
// const { userSchema, User } = require("../server/models/userSchema");

// // Import your GraphQL resolvers
// const albumResolvers = require("../server/resolvers/albumResolvers");

// // Import your type definitions (schemas)
// const typeDefs = require("../server/resolvers/typeDefs");

// const app = express();
// const port = process.env.PORT || 3001;

// // Serve production assets and handle unrecognized routes THIS WORKS RIGHT NOW DO NOT TOUCH
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "../client/build")));
// }

// // dotenv process for DB accsess
// const mongodburl =
//   process.env.MONGODB_URI ||
//   `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.zmm789m.mongodb.net/?retryWrites=true&w=majority`;

// // Connect to MongoDB
// mongoose
//   .connect(mongodburl, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Connected to MongoDB");
//   })
//   .catch((error) => {
//     console.error("Error connecting to MongoDB:", error);
//   });

// async function startApolloServer() {
//   const server = new ApolloServer({
//     typeDefs,
//     resolvers: [albumResolvers],
//     persistedQueries: false,
//   });
//   await server.start();
//   server.applyMiddleware({ app });
//   app.use(bodyParser.json({ extended: true }));
//   // app.use(cors()); // Enable CORS for all routes

//   app.use(
//     cors({
//       origin: "http://localhost:3000", // Replace with your client's origin
//       methods: ["GET", "POST"], // Specify the allowed HTTP methods
//       allowedHeaders: ["Content-Type", "Authorization"], // Specify the allowed headers
//     })
//   );

//   // Serves the REACT APP
//   app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "../client/build/index.html"));
//   });

//   // Signup endpoint
//   app.post("/api/signup", async (req, res) => {
//     // Signup logic here
//     try {
//       const { username, email, password } = req.body;
//       // Check if user already exists
//       const existingUser = await User.findOne({
//         $or: [{ email }, { username }],
//       });
//       if (existingUser) {
//         return res.status(400).json({ message: "User already exists" });
//       }
//       // Hash the password
//       const hashedPassword = await bcrypt.hash(password, 10);
//       // Create a new user
//       const newUser = new User({ username, email, password: hashedPassword });
//       await newUser.save();
//       res.status(201).json({ message: "User created successfully" });
//     } catch (error) {
//       console.error("Error signing up:", error);
//       res
//         .status(500)
//         .json({ message: "Internal server error", error: error.message });
//     }
//   });

//   // Login endpoint
//   app.post("/api/login", async (req, res) => {
//     try {
//       const { username, password } = req.body;
//       const user = await User.findOne({ username });
//       if (!user) {
//         return res.status(401).json({ message: "Invalid credentials" });
//       }
//       const isPasswordValid = await bcrypt.compare(password, user.password);
//       if (!isPasswordValid) {
//         return res.status(401).json({ message: "Invalid credentials" });
//       }
//       res.status(200).json({ message: "Login successful" });
//     } catch (error) {
//       console.error("Error logging in:", error);
//       res.status(500).json({ message: "Internal server error" });
//     }
//   });

//   // API endpoint to retrieve albums from the database
//   app.get("/api/albums", async (req, res) => {
//     try {
//       const albums = await Album.find(); // Retrieve albums from the database
//       res.json(albums);
//     } catch (error) {
//       console.error("Error occurred while retrieving albums", error);
//       res.status(500).json({ error: "Internal Server Error" });
//     }
//   });

//   // Define a route to handle the saving of the album
//   app.post("/saveAlbum", async (req, res) => {
//     try {
//       const albumData = req.body; // Assuming the album data is sent in the request body
//       const savedAlbum = await albumResolvers.Mutation.createAlbum(null, {
//         input: albumData,
//       });

//       // Return the saved album as the response
//       res.json(savedAlbum);
//     } catch (error) {
//       console.error("Error saving album:", error);
//       // Handle the error and send an appropriate response
//       res.status(500).json({ error: "Failed to save album" });
//     }
//   });

//   app.listen(port, () =>
//     console.log(`Server running on port ${port}${server.graphqlPath}`)
//   );
// }

// // Call the function to start the Apollo server
// startApolloServer();

const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const { ApolloServer } = require("apollo-server-express");
const axios = require("axios");

const path = require("path");
const fs = require("fs");

// Import your Mongoose models
const Album = require("../server/models/album");
const { userSchema, User } = require("../server/models/userSchema");

// Import your GraphQL resolvers
const albumResolvers = require("../server/resolvers/albumResolvers");

// Import your type definitions (schemas)
const typeDefs = require("../server/resolvers/typeDefs");

const app = express();
const port = process.env.PORT || 3001;

// Serve production assets and handle unrecognized routes
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

// dotenv process for DB access
const mongodburl =
  process.env.MONGODB_URI ||
  `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.zmm789m.mongodb.net/?retryWrites=true&w=majority`;

// Connect to MongoDB
mongoose
  .connect(mongodburl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Apply cors and express.json middleware before defining routes
app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your client's origin
    methods: ["GET", "POST"], // Specify the allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Specify the allowed headers
  })
);
app.use(express.json());

// Proxy server for Spotify search
app.get("/api/search-spotify", async (req, res) => {
  const searchTerm = req.query.q; // Access the search term from req.query

  const options = {
    method: "GET",
    url: "https://spotify23.p.rapidapi.com/search/",
    params: {
      q: encodeURIComponent(searchTerm),
      type: "multi",
      offset: "0",
      limit: "10",
      numberOfTopResults: "5",
    },
    headers: {
      "X-RapidAPI-Key": "16f87e2059mshe937410fce7f782p1d1cc9jsnae5dd54150f4",
      "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    res.json(response.data); // Send the response data back to the client
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" }); // Send an error response if the API call fails
  }
});

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers: [albumResolvers],
    persistedQueries: false,
  });
  await server.start();
  server.applyMiddleware({ app });
  // app.use(express.json());

  // app.use(bodyParser.json({ extended: true }));

  // app.use(
  //   cors({
  //     origin: "http://localhost:3000", // Replace with your client's origin
  //     methods: ["GET", "POST"], // Specify the allowed HTTP methods
  //     allowedHeaders: ["Content-Type", "Authorization"], // Specify the allowed headers
  //   })
  // );

  // Serves the REACT APP
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });

  // Signup endpoint
  app.post("/api/signup", async (req, res) => {
    // Signup logic here
    try {
      const { username, email, password } = req.body;
      // Check if user already exists
      const existingUser = await User.findOne({
        $or: [{ email }, { username }],
      });
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
      // Create a new user
      const newUser = new User({ username, email, password: hashedPassword });
      await newUser.save();
      res.status(201).json({ message: "User created successfully" });
    } catch (error) {
      console.error("Error signing up:", error);
      res
        .status(500)
        .json({ message: "Internal server error", error: error.message });
    }
  });

  // Login endpoint
  app.post("/api/login", async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      res.status(200).json({ message: "Login successful" });
    } catch (error) {
      console.error("Error logging in:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // API endpoint to retrieve albums from the database
  app.get("/api/albums", async (req, res) => {
    try {
      const albums = await Album.find(); // Retrieve albums from the database
      res.json(albums);
    } catch (error) {
      console.error("Error occurred while retrieving albums", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  // Define a route to handle the saving of the album
  app.post("/saveAlbum", async (req, res) => {
    try {
      const albumData = req.body; // Assuming the album data is sent in the request body
      const savedAlbum = await albumResolvers.Mutation.createAlbum(null, {
        input: albumData,
      });

      // Return the saved album as the response
      res.json(savedAlbum);
    } catch (error) {
      console.error("Error saving album:", error);
      // Handle the error and send an appropriate response
      res.status(500).json({ error: "Failed to save album" });
    }
  });

  app.listen(port, () =>
    console.log(`Server running on port ${port}${server.graphqlPath}`)
  );
}

// Call the function to start the Apollo server
startApolloServer();
