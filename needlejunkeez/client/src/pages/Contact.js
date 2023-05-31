import React from "react";
import { Typography, Container, Grid, Paper, Avatar } from "@mui/material";

import jesseImage from "../assets/jessederp.png";
import tylerImage from "../assets/tylersmajesty.jpg";
import jeremyImage from "../assets/jermsailor.png";

const developers = [
  {
    name: "Jesse Hudak",
    photoUrl: jesseImage,
    bio: "Coder. Footie. Music Fanatic & Audiophile. Know-it-all, but wears dunce cap.",
  },
  {
    name: "Tyler Dinslage",
    photoUrl: tylerImage,
    bio: "Dirtbag. Hippie. Snowboard Bum. Coder. Maybe father of many. Wizard. Scholar.",
  },
  {
    name: "Jeremy McCarter",
    photoUrl: jeremyImage,
    bio: "Cat dad. Cute. Has girlfriend (I promise). Lives by the sea and swims with dolphins. Raised by otters. Silky chest hair. Smooth everywhere else. Often mistaken for Fabio or Flava Flav. ",
  },
  // Add more developers here
];

const Contact = () => {
  return (
    <Container sx={{ marginTop: 4, marginBottom: 4 }}>
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        About the Developers
      </Typography>
      <Grid container spacing={4}>
        {developers.map((developer, index) => (
          <Grid item xs={12} key={index}>
            <Paper sx={{ p: 3, width: "100%" }}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={3}>
                  <Avatar
                    sx={{ width: 100, height: 100 }}
                    alt={developer.name}
                    src={developer.photoUrl}
                  />
                </Grid>
                <Grid item xs={9}>
                  <Typography variant="h6" component="h2" gutterBottom>
                    {developer.name}
                  </Typography>
                  <Typography variant="body1">{developer.bio}</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Contact;
