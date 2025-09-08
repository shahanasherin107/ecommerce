import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Admin from './Admin'

const Add = () => {
  var[input,setinput]=useState({ProductName:"",Price:"",Description:"",Image:""})
 var navigate=useNavigate()
 var location=useLocation()
 console.log("loc",location.state)

  const inputHandeler=(e)=>{  
    setinput({...input,[e.target.name]:e.target.value})
    console.log(input)
  }

  useEffect(()=>{
    if(location.state !== null){
      setinput({
        ...input,
        ProductName:location.state.val.ProductName,
        Price:location.state.val.Price,
        Description:location.state.val.Description,
        Image:location.state.val.Image,
      })
    }
  },[])

  const addHandler=()=>{
     if(location.state !== null){
      axios.put("http://localhost:3004/update/"+location.state.val._id,input)
    .then((res)=>{
      console.log(res.data.message)
      alert(res.data.message)
      navigate("/")
     })
    }
     else{
      axios.post("http://localhost:3004/add",input)
    .then((res)=>{
      console.log(res.data.message)
      alert(res.data.message)
      navigate("/")
    })
     }
  }

  return (
    <div>
      <Admin/>
        <Typography variant='h4'>Add Product</Typography><br />
        <TextField variant='outlined' label="Product Name"
        name="ProductName" value={input.ProductName} onChange={inputHandeler} /><br /><br />

         <TextField variant='outlined' label="Price"
         name="Price" value={input.Price} onChange={inputHandeler}/><br /><br />

          <TextField variant='outlined' label="Description"
          name="Description" value={input.Description} onChange={inputHandeler}/><br /><br />

           <TextField variant='outlined' label="Image"
           name="Image" value={input.Image} onChange={inputHandeler}/><br /><br />

        <Button variant='contained' onClick={addHandler}>add</Button>
    </div>
  )
}

export default Add