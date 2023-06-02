import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { styled } from "@mui/system";

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

const PurchaseAlbum = ({ title, coverArtUrl, masterID }) => {
  const albumData = { title, coverArtUrl, masterID };

  return (
    <StyledCard>
      <CardMedia
        component="img"
        height="200"
        width="200"
        image={coverArtUrl}
        alt={title}
      />
      <StyledCardContent>
        <Typography variant="subtitle2">{title}</Typography>
      </StyledCardContent>
      <div>
        <button
          style={{
            width: "350px",
            backgroundColor: "var(--select-color)",
            color: "#fff9fb",
            borderRadius: "0 0 10px 10px",
            padding: "8px",
            border: "none",
            outline: "none",
          }}
        >
          <a
            href={`https://www.discogs.com/master/${masterID}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#fff9fb",
              textDecoration: "none",
            }}
          >
            Buy This Album!
          </a>
        </button>
      </div>
    </StyledCard>
  );
};

export default PurchaseAlbum;
