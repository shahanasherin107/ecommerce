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
      <h3>My Cart</h3>

        <Grid container spacing={2}>
       
       {cart.map((val)=>{
              return(
                
              <Card sx={{ maxWidth: 300 }}>
            <CardMedia
              sx={{ height: 250 }}
              image={val.Image}
              title="product image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {val.ProductName}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {val.Description}
              </Typography>
               <Typography gutterBottom variant="h5" component="div">
                ₹{val.Price}
              </Typography>
            </CardContent>
            <CardActions>
             
              <Button size="small" color='error' onClick={()=>removeFromCart(val._id)}>
                <DeleteOutlineOutlinedIcon/>Delete</Button>
              
          
            </CardActions>
          </Card>)
          
               })}
            </Grid>


              <Box
            sx={{
              mt: 4,
              p: 3,
              border: "1px solid #ddd",
              borderRadius: 2,
              maxWidth: 400,
              ml: "auto",
              boxShadow: 2,
            }}
          >
            <Typography variant="h6">Price Details</Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="body1">Subtotal: ₹{subtotal}</Typography>
             <Typography variant="body1">Shipping Charge: ₹{shipping} </Typography>
            <Typography variant="h6" sx={{ mt: 1 }}>
              Total: ₹{total}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 3 }}
              onClick={goToPayment}
            >
              Proceed to Pay
            </Button>
         
    </Box>

    </div>
  )
}

export default Cart