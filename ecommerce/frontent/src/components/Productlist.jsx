import React from 'react'
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
  var[product,setProduct]=useState([])
          axios.get("http://localhost:3004/view")
          .then((res)=>{
              console.log(res.data)
              setProduct(res.data)
          })
  return (
    <div>
      <br/><br/>
       <Grid container spacing={2}>
       
       {product.map((val)=>{
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
            </CardContent>
            <CardActions>
              <Link to='/wl'>
              <Button size="small">wishlist</Button>
              </Link>
              <Link to='/crt'>
              <Button size="small">add to cart</Button>
              </Link>
            </CardActions>
          </Card>)
          
               })}
            </Grid>
            <NavBar/>
      </div>
  )
}

export default Productlist