import React from "react";

const AlbumSaveButton = ({ albumData }) => {
  const handleSaveButtonClick = () => {
    // Send a request to the server to save the album
    fetch("http://localhost:3001/saveAlbum", {
      // Update the URL here
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(albumData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Album saved:", data);
        // Handle the response from the server
      })
      .catch((error) => {
        console.error("Error saving album:", error);
        // Handle the error
      });
  };

  return (
    <div>
      {/* Render button */}
      <button
        onClick={handleSaveButtonClick}
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
        Save Album to Collection!
      </button>
    </div>
  );
};

export default AlbumSaveButton;
