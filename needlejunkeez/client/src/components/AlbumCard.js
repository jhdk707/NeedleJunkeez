import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { styled } from "@mui/system";
import AlbumSaveButton from "./AlbumSaveButton";

const StyledCard = styled(Card)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "8px",
});

const StyledCardContent = styled(CardContent)({
  textAlign: "center",
});

const AlbumCard = ({ name, artist, coverArtUrl, uri }) => {
  const albumData = { name, artist, coverArtUrl, uri };

  return (
    <StyledCard>
      <CardMedia
        component="img"
        height="350"
        width="auto"
        image={coverArtUrl}
        alt={name}
      />
      <StyledCardContent>
        <Typography variant="subtitle1">{artist}</Typography>
        <Typography variant="subtitle2">{name}</Typography>
      </StyledCardContent>
      <AlbumSaveButton albumData={albumData} />
    </StyledCard>
  );
};

export default AlbumCard;
