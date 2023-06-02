import React, { useState } from "react";
import { Grid, Box, Typography } from "@mui/material";
import SearchFunction from "../components/SearchFunction";
import AlbumCard from "../components/AlbumCard";

function SpotResults() {
  const [spotifyResults, setSpotifyResults] = useState(null);
  const saveAlbumData = () => {};

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Box>
        <SearchFunction updateResults={setSpotifyResults} />

        {spotifyResults && (
          <Box>
            <Grid
              container
              spacing={3}
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item xs={12}>
                <Grid container spacing={3} justifyContent="center">
                  {spotifyResults.albums.items.map((item) => (
                    <Grid item key={item.data.uri} xs={12} sm={6} md={4} lg={3}>
                      <Box
                        maxWidth={350}
                        margin={2}
                        display="flex"
                        justifyContent="center"
                      >
                        <AlbumCard
                          artist={item.data.artists.items[0].profile.name}
                          name={item.data.name}
                          coverArtUrl={item.data.coverArt.sources[0].url}
                          uri={item.data.uri}
                          saveAlbumData={saveAlbumData}
                        />
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
            {spotifyResults.albums.items.length === 0 && (
              <Typography variant="body2" align="center">
                No albums found.
              </Typography>
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default SpotResults;
