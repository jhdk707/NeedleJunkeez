import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Avatar,
  TextField,
  Button,
} from "@mui/material";
import { styled } from "@mui/system";
import MyTech from "../components/MyTech";
// import Ants from "../assets/Ants.jpg";
import Horses from "../assets/Horses.jpg";
import WhiteBloodCells from "../assets/WhiteBloodCells.jpg";
import jesseImage from "../assets/jessederp.png";
import Pearl from "../assets/Pearl.jpg";
import Transformer from "../assets/Transformer.jpeg";
import MarqueeMoon from "../assets/MarqueeMoon.jpg";
import ComeMyFanatics from "../assets/ComeMyFanatics..jpg";

const HomePage = () => {
  const user = { name: "John Doe" }; // Simulated user data
  const [backgroundColor, setBackgroundColor] = useState("");
  const [textColor, setTextColor] = useState("");
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [originalImage, setOriginalImage] = useState(null);

  let formattedName = "";

  if (user && user.name) {
    formattedName = user.name.charAt(0).toUpperCase() + user.name.slice(1);
  }

  // Example array of albums
  const savedAlbums = [
    {
      album: "Pearl",
      artist: "Janis Joplin",
      image: Pearl,
    },
    {
      album: "Transformer",
      artist: "Lou Reed",
      image: Transformer,
    },
    {
      album: "Marquee Moon",
      artist: "Television",
      image: MarqueeMoon,
    },
  ];

  const faves = [
    {
      album: "Come My Fanatics",
      artist: "Electric Wizard",
      image: ComeMyFanatics,
    },
    {
      album: "Horses",
      artist: "Patti Smith",
      image: Horses,
    },
    {
      album: "White Blood Cells",
      artist: "The White Stripes",
      image: WhiteBloodCells,
    },
  ];

  const minColumns = Math.min(8, savedAlbums.length); // Minimum number of columns required

  const CenteredContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center", // Center horizontally
    alignItems: "center", // Center vertically
    flexDirection: "column",
    height: "", // Adjust the height as needed
  }));

  const handleBackgroundColorChange = (event) => {
    const color = event.target.value;
    setBackgroundColor(color);
    localStorage.setItem("background-color", color);
  };

  const handleTextColorChange = (event) => {
    const color = event.target.value;
    setTextColor(color);
    localStorage.setItem("text-color", color);
  };

  const handleBackgroundImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setBackgroundImage(reader.result);
      localStorage.setItem("background-image", reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleResetImage = () => {
    setBackgroundImage(null);
    localStorage.removeItem("background-image");
  };

  useEffect(() => {
    const storedBackgroundColor = localStorage.getItem("background-color");
    const storedTextColor = localStorage.getItem("text-color");
    const storedBackgroundImage = localStorage.getItem("background-image");

    if (storedBackgroundColor) {
      setBackgroundColor(storedBackgroundColor);
    }
    if (storedTextColor) {
      setTextColor(storedTextColor);
    }
    if (storedBackgroundImage) {
      setBackgroundImage(storedBackgroundImage);
      setOriginalImage(storedBackgroundImage);
    }
  }, []);

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: backgroundColor,
        color: textColor,
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          width: "300px",
          borderRight: "3px solid #ffb20f",
          padding: "20px",
          overflow: "auto",
        }}
      >
        <Box mb={4}>
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            Your Favorites:
          </Typography>
          <ol style={{ listStyle: "decimal", paddingLeft: "20px" }}>
            {faves.slice(0, 3).map((album, index) => (
              <li key={index}>
                <Card
                  sx={{
                    backgroundColor: "#252627",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={album.image || ""}
                    alt={album.album || ""}
                  />
                  <CardContent>
                    <Typography variant="subtitle1">{album.artist}</Typography>
                    <Typography variant="subtitle2">{album.album}</Typography>
                  </CardContent>
                </Card>
              </li>
            ))}
          </ol>
        </Box>
        {/* <MyTech /> */}
      </div>
      <div style={{ flex: "1", padding: "20px", overflow: "auto" }}>
        <CenteredContainer>
          <Typography variant="h4" component="div">
            Welcome, {formattedName}!
          </Typography>
          <Avatar
            sx={{ width: 100, height: 100, mt: 2 }}
            alt={user.name}
            src={jesseImage}
          />
        </CenteredContainer>
        <Box
          mt={4} // Increase the top margin to create more spacing
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center" // Center the items horizontally
          minHeight="40vh" // Adjust the height as needed
        >
          <Typography variant="h6">
            Since you liked Horses, you may also like...
            {/* {savedAlbums[0].album} */}
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: `repeat(auto-fit, minmax(200px, 1fr))`,
              gridGap: "16px",
              width: "80%",
              maxHeight: "100%",
              overflow: "auto",
              marginTop: "16px",
            }}
          >
            {savedAlbums.slice(0, minColumns).map((album, index) => (
              <Card key={index} sx={{ backgroundColor: "#252627" }}>
                <CardMedia
                  component="img"
                  height=""
                  image={album.image}
                  alt={album.album}
                />
                <CardContent>
                  <Typography
                    variant="subtitle1"
                    sx={{ textAlign: "center", color: "white" }}
                  >
                    {album.artist}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{ textAlign: "center", color: "white" }}
                  >
                    {album.album}{" "}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      </div>
      <div
        style={{
          width: "300px",
          borderLeft: "3px solid #ffb20f",
          padding: "20px",
          overflow: "auto",
        }}
      >
        <Box mb={4}>
          <Typography variant="h6">Customization:</Typography>
          <TextField
            label="Background Color"
            value={backgroundColor}
            onChange={handleBackgroundColorChange}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Text Color"
            value={textColor}
            onChange={handleTextColorChange}
            sx={{ marginBottom: 2 }}
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleBackgroundImageUpload}
            sx={{ marginBottom: 2 }}
          />
          {backgroundImage && (
            <Button onClick={handleResetImage} sx={{ marginBottom: 2 }}>
              Reset Image
            </Button>
          )}
        </Box>
        <MyTech />
      </div>
    </div>
  );
};

export default HomePage;
