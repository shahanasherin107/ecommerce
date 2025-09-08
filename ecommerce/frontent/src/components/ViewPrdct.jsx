import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Admin from './Admin';

const View = () => {
  var[product,setproduct]=useState([])
  var navigate=useNavigate()
  // useEffect(()=>{},[]) syntax
  useEffect(()=>{
  axios.get("http://localhost:3004/view")
  .then((res)=>{
    console.log(res.data)
    setproduct(res.data)
  })
  },[])

  //delete function
  const deleteproduct=(id)=>{
    console.log(id)
    axios.delete("http://localhost:3004/delete/"+id)
    .then((res)=>{
      console.log(res.data.message)
      alert(res.data.message)
      window.location.reload()
    })
  }
  const updateproduct=(val)=>{
    navigate("/add",{state:{val}})
  }
  
  return (
    <div>
      <Admin/>
      <Grid container spacing={2}>
      {product.map((val)=>{
        return(
          <Grid item xs={12} md={4} sm={6}>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={val.Image}
        title="green iguana"
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
        <Button size="small" variant='contained' color='error' 
        onClick={()=>{deleteproduct(val._id)}}>Delete</Button>
        <Button size="small" variant='contained' color='success'
        onClick={()=>{updateproduct(val)}}>Update</Button>
      </CardActions>
    </Card> 
    </Grid>
    )

      })}
      </Grid>
    </div>
  )
}

export default View