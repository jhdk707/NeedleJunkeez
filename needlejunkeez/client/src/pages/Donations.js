import React, { useState, useEffect } from "react";
import { Typography, TextField, Button, Box } from '@mui/material';
import StripeCheckout from 'react-stripe-checkout';

const Donations = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  const handleDonation = (token) => {
    console.log(token);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      {message ? (
        <Typography variant="h6" gutterBottom>
          {message}
        </Typography>
      ) : (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          p={2}
          border={1}
          borderRadius={4}
          width={300}
          maxWidth="100%"
          bgcolor="#f5f5f5"
        >
          <TextField label="Name" variant="outlined" fullWidth />
          <TextField label="Email" variant="outlined" fullWidth />
          <TextField label="Amount" variant="outlined" fullWidth />
          <StripeCheckout
            stripeKey="pk_live_51N9Z2kACF1Xf0gWQYUl1zOyvJPJKsfJTRJNb8UZ3Wx4Nay5MjTNUkavAd7W5iwzoDP0WLtPov4OUAqvozetWlsXu00m6I6RjxS"
            token={handleDonation}
            name="Site Donation"
            description="Donate to support the website"
            amount={100} // Set the amount based on your requirements
            currency="USD" // Set the currency based on your requirements
          >
            <Button variant="contained" color="primary">
              Donate with Stripe
            </Button>
          </StripeCheckout>
        </Box>
      )}
    </Box>
  );
};

export default Donations;