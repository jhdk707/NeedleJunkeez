import React from "react";
import { Grid, Typography, Avatar, Paper } from "@mui/material";
import ZiggyStardust from "../assets/ZiggyStardust.jpg";
import MaggotBrain from "../assets/MaggotBrain.jpg";
import Rumors from "../assets/Rumours.png";
import KidA from "../assets/KidA.png";

import PrivateDancer from "../assets/PrivateDancer.jpg";
import NeverMindtheBollocks from "../assets/NeverMindtheBollocks.png";
import ThingsFallApart from "../assets/ThingsFallApart.jpg";
import BitchesBrew from "../assets/BitchesBrew.jpg";
import ReadytoDie from "../assets/ReadytoDie.jpg";
import Velvet from "../assets/VelvetUndergroundAndNico.jpg";

const friends = [
  { id: 1, name: "Tom Myspace", avatar: "T", favoriteAlbum: ZiggyStardust },
  { id: 2, name: "Jane Smith", avatar: "J", favoriteAlbum: MaggotBrain },
  { id: 3, name: "Alex Johnson", avatar: "A", favoriteAlbum: Rumors },
  { id: 4, name: "Ricky Pepee", avatar: "R", favoriteAlbum: PrivateDancer },
  {
    id: 5,
    name: "Bob Nougat",
    avatar: "B",
    favoriteAlbum: NeverMindtheBollocks,
  },
  { id: 6, name: "Smack Watson", avatar: "S", favoriteAlbum: ThingsFallApart },
  { id: 7, name: "Mr Tumnus", avatar: "M", favoriteAlbum: BitchesBrew },
  { id: 8, name: "Victor Vaughn", avatar: "V", favoriteAlbum: ReadytoDie },
  { id: 9, name: "Jeremy McCarter", avatar: "J", favoriteAlbum: Velvet },
  { id: 10, name: "Tyler Dinslage", avatar: "T", favoriteAlbum: KidA },
  // { id: 11, name: 'Jesse Hudak', avatar: 'J', favoriteAlbum: ComeMyFanatics},

  // Add more friends as needed
];

const Friends = () => {
  const totalFriends = friends.length;

  return (
    <div style={{ backgroundColor: "#d3d4d9", paddingBottom: 40 }}>
      <Typography variant="h4" component="h1" align="center">
        My Friends ({totalFriends})
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        {friends.map((friend) => (
          <Grid item key={friend.id} xs={12} sm={6} md={4} lg={3}>
            <Paper
              elevation={3}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                height: 400, // Adjust the height as needed
                width: 300, // Adjust the width as needed
                padding: 2,
                borderRadius: 1,
              }}
            >
              <Avatar
                sx={{
                  width: 64,
                  height: 64,
                  marginBottom: 2,
                }}
              >
                {friend.avatar}
              </Avatar>
              <Typography>{friend.name}</Typography>
              <Typography variant="subtitle2">Current Favorite:</Typography>
              <div style={{ width: "100%", height: "auto" }}>
                <img
                  src={friend.favoriteAlbum}
                  alt="Favorite Album"
                  style={{ width: "100%", height: 250, objectFit: "cover" }}
                />
              </div>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Friends;
