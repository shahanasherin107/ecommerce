import React, { useEffect } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Grid } from '@mui/material';
import { useState } from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';



const Productlist = () => {
  var[product,setProduct]=useState([]);
      
         useEffect(() => {
  axios.get("http://localhost:3004/view")
    .then((res) => {
      setProduct(res.data);
    })
    .catch((err) => console.error("Error fetching products:", err));
}, []);


           const addToCart = (product) => {
    axios.post("http://localhost:3004/addcart", product)
      .then(() => alert("Added to Cart!"))
      .catch((err) => console.error(err));
  };

 const addToWishlist = (val) => {
    axios.post("http://localhost:3004/addwishlist", {
      ProductName: val.ProductName,
      Description: val.Description,
      Price: val.Price,
      Image: val.Image,
    })
    .then(() => alert("Added to Wishlist!"))
    .catch((err) => console.error("Error adding wishlist:", err));
};

  return (
    <div>
      <NavBar/>
      <br/><br/>
       <Grid container spacing={3} justifyContent="center" sx={{ padding: "2rem" }}>
       
       {product.map((val)=>{
              return(
                
              <Card sx={{ maxWidth: 300, borderRadius: "12px", boxShadow: 3 }}>
            <CardMedia
              sx={{ height: 250 }}
              image={val.Image}
              title="product image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: "bold", color: "var(--color-primary)" }}>
                {val.ProductName}
              </Typography>
              <Typography variant="body2" sx={{ color: "var(--color-text-light)", mb: 1.5 }}>
                {val.Description}
              </Typography>
               <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: "bold", color: "var(--color-primary)" }}>
                ₹{val.Price}
              </Typography>
            </CardContent>
            <CardActions>
             
              <Button size="small" onClick={() => addToWishlist(val)}  sx={{ 
                    backgroundColor: "var(--color-accent)", 
                    color: "white", 
                    "&:hover": { backgroundColor: "var(--color-highlight)" } 
                  }}>wishlist</Button>
              
             
              <Button size="small" onClick={() => addToCart(val)} sx={{ 
                    backgroundColor: "var(--color-accent)", 
                    color: "white", 
                    "&:hover": { backgroundColor: "var(--color-highlight)" } 
                  }}>add to cart</Button>
              
            </CardActions>
          </Card>)
          
               })}
            </Grid>
            
      </div>
  )
}

export default Productlist