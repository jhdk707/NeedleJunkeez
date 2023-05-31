import React, { useEffect } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

function MyTech() {
  const [turntableValue, setTurntableValue] = React.useState("");
  const [ampValue, setAmpValue] = React.useState("");
  const [speakersValue, setSpeakersValue] = React.useState("");
  const [otherGearValue, setOtherGearValue] = React.useState("");
  const [isPTag, setPTag] = React.useState(true);

  // Load the initial values from local storage
  useEffect(() => {
    const storedTurntableValue = localStorage.getItem("turntableValue");
    if (storedTurntableValue) {
      setTurntableValue(storedTurntableValue);
    }

    const storedAmpValue = localStorage.getItem("ampValue");
    if (storedAmpValue) {
      setAmpValue(storedAmpValue);
    }

    const storedSpeakersValue = localStorage.getItem("speakersValue");
    if (storedSpeakersValue) {
      setSpeakersValue(storedSpeakersValue);
    }

    const storedOtherGearValue = localStorage.getItem("otherGearValue");
    if (storedOtherGearValue) {
      setOtherGearValue(storedOtherGearValue);
    }
  }, []);

  const handleTurntableChange = (event) => {
    setTurntableValue(event.target.value);
  };

  const handleAmpChange = (event) => {
    setAmpValue(event.target.value);
  };

  const handleSpeakersChange = (event) => {
    setSpeakersValue(event.target.value);
  };

  const handleOtherGearChange = (event) => {
    setOtherGearValue(event.target.value);
  };

  const handleUpdate = () => {
    // Save all values to local storage
    localStorage.setItem("turntableValue", turntableValue);
    localStorage.setItem("ampValue", ampValue);
    localStorage.setItem("speakersValue", speakersValue);
    localStorage.setItem("otherGearValue", otherGearValue);

    // Perform actions with the updated values
    console.log("Turntable:", turntableValue);
    console.log("Amp:", ampValue);
    console.log("Speakers:", speakersValue);
    console.log("Other Gear:", otherGearValue);
    setPTag(true);
  };

  return (
    <Box>
      <Typography variant="h6" sx={{ textAlign: "center" }}>
        My Tech
      </Typography>
      <Box mt={2}>
        <Typography>Turntable:</Typography>
        {isPTag ? (
          <div>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <p>{turntableValue}</p>
              <Button onClick={() => setPTag(false)}>Edit</Button>
            </Box>
            <hr></hr>
          </div>
        ) : (
          <TextField
            label="Turntable Input"
            value={turntableValue}
            onChange={handleTurntableChange}
          />
        )}
      </Box>
      <Box mt={2}>
        <Typography>Amp:</Typography>
        {isPTag ? (
          <div>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <p>{ampValue}</p>
              <Button onClick={() => setPTag(false)}>Edit</Button>
            </Box>

            <hr></hr>
          </div>
        ) : (
          <TextField label="Amp Input" onChange={handleAmpChange} />
        )}
      </Box>
      <Box mt={2}>
        <Typography>Speakers:</Typography>
        {isPTag ? (
          <div>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <p>{speakersValue}</p>
              <Button onClick={() => setPTag(false)}>Edit</Button>
            </Box>

            <hr></hr>
          </div>
        ) : (
          <TextField label="Speakers Input" onChange={handleSpeakersChange} />
        )}
      </Box>
      <Box mt={2}>
        <Typography>Other Gear:</Typography>
        {isPTag ? (
          <div>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <p>{otherGearValue}</p>
              <Button onClick={() => setPTag(false)}>Edit</Button>
            </Box>

            <hr></hr>
          </div>
        ) : (
          <TextField
            label="Other Gear Input"
            onChange={handleOtherGearChange}
          />
        )}
      </Box>
      <Box mt={2} sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          style={{ backgroundColor: "#bb0a21", color: "white" }}
          onClick={handleUpdate}
        >
          Update
        </Button>
      </Box>
    </Box>
  );
}

export default MyTech;
