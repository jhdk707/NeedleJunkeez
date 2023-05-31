import * as React from "react";
import { Link } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

const records = [
  // Your record data here
  {
    _id: 1,
    name: "Album 1",
    artist: "Artist 1",
    coverArtUrl: "https://via.placeholder.com/200x200",
  },
  {
    id: 2,
    title: "Album 2",
    artist: "Artist 2",
    year: 2022,
    genre: "Pop",
    image: "https://via.placeholder.com/200x200",
  },
  {
    id: 3,
    title: "Album 2",
    artist: "Artist 2",
    year: 2022,
    genre: "Poop",
    image: "https://via.placeholder.com/200x200",
  },
  {
    id: 4,
    title: "Album 2",
    artist: "Artist 2",
    year: 2022,
    genre: "Pop",
    image: "https://via.placeholder.com/200x200",
  },
  {
    id: 5,
    title: "Album 2",
    artist: "Artist 2",
    year: 2022,
    genre: "Pop",
    image: "https://via.placeholder.com/200x200",
  },
  {
    id: 6,
    title: "Album 2",
    artist: "Artist 2",
    year: 2022,
    genre: "Pop",
    image: "https://via.placeholder.com/200x200",
  },
  {
    id: 7,
    title: "Album 2",
    artist: "Artist 2",
    year: 2022,
    genre: "Pop",
    image: "https://via.placeholder.com/200x200",
  },
];

const RecordGrid = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

const RecordCard = styled(Card)(({ theme, columnCount }) => ({
  maxWidth: `calc(100% / ${columnCount} - ${theme.spacing(2)}px)`,
  boxShadow: theme.shadows[3],
  marginBottom: theme.spacing(2),
}));

const RecordImage = styled(CardMedia)(({ theme }) => ({
  height: 200,
}));

export default function Mycollection() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const columnCount = matches ? 4 : 2;

  return (
    <RecordGrid container spacing={2} justifyContent="center">
      {records.map((record) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={record.id}>
          <RecordCard
            component={Link}
            to={`/record/${record.id}`}
            columnCount={columnCount}
            sx={{ textDecoration: "none" }}
          >
            <CardActionArea>
              <RecordImage image={record.image} alt={record.title} />
              <CardContent>
                <Typography variant="h6" component="div" gutterBottom>
                  {record.title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  gutterBottom
                >
                  {record.artist}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  Year: {record.year}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Genre: {record.genre}
                </Typography>
              </CardContent>
            </CardActionArea>
          </RecordCard>
        </Grid>
      ))}
    </RecordGrid>
  );
}
