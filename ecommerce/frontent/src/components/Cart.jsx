import React, { useEffect } from 'react'
import NavBar from './NavBar'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Grid } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';


const Cart = () => {
  const [cart, setCart] = useState([]);

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

    </div>
  )
}

export default Cart