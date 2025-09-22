import React from "react";
import NavBar from "./NavBar";
import { Box, Button, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const total = location.state?.total || 0;

  const handlePayment = async () => {
    try {
      alert(" Payment Successful!");

      // get current logged in user
      const user = JSON.parse(localStorage.getItem("user"));

      // fetch cart items
      const cartRes = await axios.get("http://localhost:3004/cart");
      const cartItems = cartRes.data;

      // place new order
      await axios.post("http://localhost:3004/order", {
        userId: user.id,
        products: cartItems,
        totalAmount: total,
      });

      // clear cart after order is placed
      for (let item of cartItems) {
        await axios.delete(`http://localhost:3004/cart/${item._id}`);
      }

      // redirect to product list after successful order
      navigate("/prdct");
    } catch (error) {
      console.error("Payment error:", error);
      alert(" Something went wrong while processing your order.");
    }
  };

  return (
    <div>
      <NavBar />
      <Box sx={{ textAlign: "center", mt: 10, mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "var(--color-primary)" }}>
          Payment Page
        </Typography>
      </Box>
      <Typography variant="h6" sx={{ mt: 1, color: "var(--color-primary)" }}>
        Total Amount: ₹{total}
      </Typography>

      <Button
        variant="contained"
          fullWidth
          sx={{
            mt: 3,
            backgroundColor: "var(--color-accent)",
            "&:hover": { backgroundColor: "var(--color-highlight)" },
          }}
        onClick={handlePayment}
      >
        Pay Now
      </Button>
    </div>
  );
};

export default Payment;
