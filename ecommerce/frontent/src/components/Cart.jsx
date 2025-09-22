import React, { useEffect } from 'react'
import NavBar from './NavBar'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Box, Divider, Grid } from '@mui/material';
import { useState } from 'react';
import { Link, useActionData, useNavigate } from 'react-router-dom';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';


const Cart = () => {
  const [cart, setCart] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [shipping] = useState(50)
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = () => {
    axios.get("http://localhost:3004/cart")
      .then((res) => setCart(res.data))
      .catch((err) => console.error(err));
  };

  const removeFromCart = (id) => {
    axios.delete(`http://localhost:3004/cart/${id}`)
      .then(() => {
        alert("Removed from Cart!");
        fetchCart();
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    let sub = cart.reduce((acc, val) => acc + Number(val.Price), 0);
    setSubtotal(sub);
    setTotal(sub+shipping); 
  }, [cart]);
  
   const goToPayment = () => {
    navigate("/pymnt", { state: { total } });
  };

 
  return (
    <div>
      <NavBar/>
      <Box sx={{ textAlign: "center", mt: 10, mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "var(--color-primary)" }}>
          My Cart
        </Typography>
      </Box>

        <Grid container spacing={3}  justifyContent="center">
       
       {cart.map((val)=>{
              return(
               
              <Card item xs={12} sm={6} md={4} lg={3} key={val._id}>
            <CardMedia
              sx={{ height: 220 }}
              image={val.Image}
              title="product image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {val.ProductName}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
                {val.Description}
              </Typography>
               <Typography gutterBottom variant="h5" component="div" sx={{ color: "var(--color-primary)" }}>
                ₹{val.Price}
              </Typography>
            </CardContent>
            <CardActions>
             
              <Button  variant="outlined"
                  color="error"
                  fullWidth  onClick={()=>removeFromCart(val._id)}>
                <DeleteOutlineOutlinedIcon/>Delete</Button>
              
          
            </CardActions>
          </Card>)
          
               })}
            </Grid >


              <Box
           sx={{
          mt: 6,
          p: 3,
          border: "1px solid #ddd",
          borderRadius: 2,
          maxWidth: 400,
          mx: "auto",
          boxShadow: 3,
          backgroundColor: "white",
        }}
          > 
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>Price Details</Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="body1">Subtotal: ₹{subtotal}</Typography>
             <Typography variant="body1">Shipping Charge: ₹{shipping} </Typography>
            <Typography variant="h6" sx={{ mt: 1, color: "var(--color-primary)" }}>
              Total: ₹{total}
            </Typography>
            <Button
              variant="contained"
          fullWidth
          sx={{
            mt: 3,
            backgroundColor: "var(--color-accent)",
            "&:hover": { backgroundColor: "var(--color-highlight)" },
          }}
              onClick={goToPayment}
            >
              Proceed to Pay
            </Button>
         
    </Box>

    </div>
  )
}

export default Cart