// import React from "react";
// import { createRoot } from "react-dom/client";
// import "mdb-react-ui-kit/dist/css/mdb.min.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import App from "./App";

// const rootElement = document.getElementById("root");

// createRoot(rootElement).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import React from "react";
import { createRoot } from "react-dom/client";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from "./App";

// Create an ApolloClient instance
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql", // Replace with your GraphQL server endpoint
  cache: new InMemoryCache(),
});

const rootElement = document.getElementById("root");

createRoot(rootElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
