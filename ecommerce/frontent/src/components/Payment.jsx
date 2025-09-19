import React from 'react'
import NavBar from './NavBar'
import { Button, Typography } from '@mui/material'
import { useLocation } from 'react-router-dom';

const Payment = () => {
  const location = useLocation();
  const total = location.state?.total || 0;

   const handlePayment = () => {
    alert("✅ Payment Successful!");
   }
  return (
    <div>
      <NavBar/>
      <h3>Payment</h3>
   
        <Typography variant="h6" sx={{ my: 2 }}>
          Total Amount: ₹{total}
        </Typography>
        <Button
          variant="contained"
          color="success"
          fullWidth
          onClick={handlePayment}
        >
          Pay Now
        </Button>
    </div>
  )
}

export default Payment