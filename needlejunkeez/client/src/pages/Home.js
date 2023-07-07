import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Avatar,
  Button,
  Stack,
  TextField,
} from "@mui/material";
import { styled } from "@mui/system";
import MyTech from "../components/MyTech";
import Horses from "../assets/Horses.jpg";
import WhiteBloodCells from "../assets/WhiteBloodCells.jpg";
import jesseImage from "../assets/jessederp.png";
import Pearl from "../assets/Pearl.jpg";
import Transformer from "../assets/Transformer.jpeg";
import MarqueeMoon from "../assets/MarqueeMoon.jpg";
import ComeMyFanatics from "../assets/ComeMyFanatics..jpg";
import "../Homepage.css"

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
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "",
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
      const imageUrl = reader.result;
      setBackgroundImage(imageUrl);
      localStorage.setItem("background-image", imageUrl);
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
        backgroundColor: backgroundColor,
        color: textColor,
        position: "relative",
        zIndex: 1,
      }}
    >
      <div className="background-color-container" />
      <div className="background-image-container">
        {backgroundImage && (
          <img className="background-image" src={backgroundImage} alt="Background" />
        )}
      </div>
      <div>
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1,
            backgroundImage: `url(data:image/jpeg;base64,${backgroundImage})`,
            backgroundSize: "cover",
          }}
        />
      </div>
  <div>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          backgroundImage: `url(data:image/jpeg;base64,${backgroundImage})`,
          backgroundSize: "cover",
        }}
      />
    </div>

      <Stack direction={{ xs: "column", sm: "row" }}>
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
            mt={4}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            minHeight="40vh"
          >
            <Typography variant="h6">
              Since you liked Horses, you may also like...
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
        <Box
          mb={4}
          sx={{
            borderLeft: "3px solid #ffb20f",
            paddingLeft: "0px",
            overflow: "auto",
          }}
        >
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            Your Favorites:
          </Typography>
          <ul style={{ listStyle: "none", paddingLeft: "20px" }}>
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
                    height="50%"
                    width="auto"
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
          </ul>
        </Box>
        <div
          style={{
            width: "300px",
            borderLeft: "3px solid #ffb20f",
            padding: "5px",
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
      </Stack>
    </div>
  );
};

export default HomePage;