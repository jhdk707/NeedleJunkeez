import React, { useState } from "react";
import { Grid, Box, Typography } from "@mui/material";
import SearchFunction from "../components/SearchFunction";
import PurchaseAlbum from "../components/PurchaseAlbum";

function DiscResults() {
  const [discogsResults, setDiscogsResults] = useState(null);
  const saveAlbumData = () => {};

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Box>
        <SearchFunction updateResults={setDiscogsResults} />

        {discogsResults && (
          <Box>
            <Grid
              container
              spacing={3}
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item xs={12}>
                <Grid container spacing={3} justifyContent="center">
                  {discogsResults.results.map((result) => (
                    <Grid item key={result.id} xs={12} sm={6} md={4} lg={3}>
                      <Box
                        maxWidth={350}
                        margin={2}
                        display="flex"
                        justifyContent="center"
                      >
                        <PurchaseAlbum
                          title={result.title}
                          coverArtUrl={result.cover_image}
                          masterID={result.master_id}
                          saveAlbumData={saveAlbumData}
                        />
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
            {discogsResults.results.length === 0 && (
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

export default DiscResults;
