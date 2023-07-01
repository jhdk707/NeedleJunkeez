import React, { useState, useEffect } from "react";
import { TextField, Button, Menu, MenuItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

function SearchFunction({ updateResults }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedOption, setSelectedOption] = useState("");

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        handleMenuClose();

        if (option === "Search For Album") {
            searchSpotAlbum(searchTerm);
        } else if (option === "Search For Sale") {
            searchDiscogsAlbum(searchTerm);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Search Term:", searchTerm);
        localStorage.setItem("Search Term:", searchTerm);
        if (selectedOption === "Search For Album") {
            // Perform search for album
            console.log("Performing search for album...");
            searchSpotAlbum(searchTerm);
        } else if (selectedOption === "Search For Sale") {
            // Perform search for sale
            console.log("Performing search for sale...");
            searchDiscogsAlbum();
        }
    };

    const searchSpotAlbum = async (searchTerm) => {
        // Perform search logic using searchTerm
        const url = `https://spotify23.p.rapidapi.com/search/?q=${encodeURIComponent(
            searchTerm
        )}&type=albums`;

        const options = {
            method: "GET",
            headers: {
                "X-RapidAPI-Key": process.env.REACT_APP_SPOTIFY_API_KEY,
                "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
            },
        };

        try {
            const response = await fetch(url, options);

            if (response.ok) {
                const result = await response.json();
                console.log(result);
                updateResults(result);
            } else {
                console.error("Error occurred while searching");
            }
        } catch (error) {
            console.error("Error occurred while searching", error);
        }
    };

    const searchDiscogsAlbum = async (searchTerm) => {
        // Perform search logic using searchTerm
        const url = `https://api.discogs.com/database/search?release_title=${encodeURIComponent(
            searchTerm
        )}&type=release&format=album&per_page=10`;
        const headers = {
            "User-Agent": "Your App Name",
            Authorization: `Discogs token=${process.env.REACT_APP_DISCOGS_API_KEY}`,
        };

        try {
            const response = await fetch(url, { headers });

            if (response.ok) {
                const result = await response.json();
                console.log(result);
                updateResults(result);
            } else {
                console.error("Error occurred while searching");
            }
        } catch (error) {
            console.error("Error occurred while searching", error);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            style={{ display: "flex", alignItems: "center" }}
        >
            <TextField
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleInputChange}
                variant="outlined"
                size="small"
                fullWidth
                InputProps={{
                    startAdornment: <SearchIcon />,
                    endAdornment: (
                        <Button
                            variant="text"
                            size="small"
                            aria-haspopup="true"
                            onClick={handleMenuOpen}
                        >
                            <MenuIcon />
                        </Button>
                    ),
                }}
            />
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
            >
                <MenuItem
                    onClick={() => handleOptionSelect("Search For Album")}
                    component={Link}
                    to="/search/spot"
                >
                    Search For Album
                </MenuItem>
                <MenuItem
                    onClick={() => handleOptionSelect("Search For Sale")}
                    component={Link}
                    to="/search/disc"
                >
                    Search For Sale
                </MenuItem>
                <MenuItem onClick={() => handleOptionSelect("Get All Users")}>
                    Get All Users
                </MenuItem>
                <MenuItem onClick={() => handleOptionSelect("Get Single User")}>
                    Get Single User
                </MenuItem>
            </Menu>
        </form>
    );
}

export default SearchFunction;