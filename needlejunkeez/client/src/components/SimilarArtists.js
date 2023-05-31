// import React, { useEffect } from "react";
// import axios from "axios";
// //import savedAlbums from '../Mycollection'

// const options = {
//   method: "GET",
//   url: "https://spotify23.p.rapidapi.com/artist_related/",
//   params: {
//     id: "2w9zwq3AktTeYYMuhMjju8",
//   },
//   headers: {
//     "X-RapidAPI-Key": "142b74e2a0msh1c7996bc1656b54p1c1fcajsnbf29db333a4d",
//     "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
//   },
// };

// export default function SimilarArtists() {
//   useEffect(() => {
//     // Function to fetch and display similar artists
//     async function displaySimilarArtists() {
//       try {
//         const response = await axios.request(options);
//         const similarArtists = response.data;

//         // Assuming you have a variable `savedAlbums` containing the user's saved albums
//         savedAlbums.map((album) => {
//           console.log("Album:", album.name);
//           console.log("Similar Artists:");
//           similarArtists.forEach((artist) => {
//             console.log(artist.name);
//           });
//           console.log("-----");
//         });
//       } catch (error) {
//         console.error(error);
//       }
//     }

//     // Call the function on component mount
//     displaySimilarArtists();
//   }, []);

//   return <div>Similar Artists Component</div>;
// }
