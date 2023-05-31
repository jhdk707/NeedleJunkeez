import React from "react";
import { Avatar, Typography, Button, Box, Grid } from "@mui/material";

const Profile = () => {
  return (
    <Box mt={4} display="flex" flexDirection="column" alignItems="center">
      <Avatar alt="User Avatar" src="/path/to/avatar.jpg" />
      <Typography variant="h5" align="center">
        User's Name
      </Typography>
      <Typography variant="body1" align="center">
        User's Bio
      </Typography>
      <Box display="flex" justifyContent="center" mt={2}>
        <Button variant="outlined" color="primary">
          Edit Profile
        </Button>
      </Box>
      <Typography variant="h6" align="center" mt={4}>
        Friends
      </Typography>
      {/* Render the list of friends here */}
      <Typography variant="h6" align="center" mt={4}>
        Favorites
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {/* Render the user's favorite albums */}
      </Grid>
    </Box>
  );
};

export default Profile;
