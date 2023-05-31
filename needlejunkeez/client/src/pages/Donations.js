import React from 'react';
import { Typography, TextField, Button, Box } from '@mui/material';
import StripeCheckout from 'react-stripe-checkout';

const Donations = () => {
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
      <Typography variant="h6" gutterBottom>
        Becoming a NeedleJunkee yourself? Donate to help support the developers!
      </Typography>
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
          stripeKey="pk_test_51N9Z2kACF1Xf0gWQhMlu4qWktSMl3372amfYMKpNkOz32SJqYZF2HqLe86c8aDNHJk9HyO9CuqEqcc0oi2iI6ryN00vzXdD2vB"
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
    </Box>
  );
};

export default Donations;
