import { Alert, Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'

const SignUp = () => {
    var[user,setUser]=useState({Name:"",Phone:"",Email:"",Password:""})

  const inputHandeler=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
    console.log(user)
  }
  const addHandler=()=>{
    axios.post("http://localhost:3004/add",user)
    .then((res)=>{
        Alert(res.data)
    })
  }
  return (
    <div>
      
        <h1>Signup Page</h1>
            <TextField label="Name" variant="standard" name='Name' value={user.Name}
        onChange={inputHandeler}/><br/> &nbsp;&nbsp;&nbsp;
            <TextField label="Phone" variant="standard" name='Phone' value={user.Phone}
        onChange={inputHandeler}/> &nbsp;&nbsp;&nbsp;
            <TextField label="Email" variant="standard" name='Email' value={user.Email}
        onChange={inputHandeler}/> <br /> <br />
        <TextField label="Password"  variant="standard" name='Password' value={user.Password}
        onChange={inputHandeler}/> <br />
           <Link to='/'>
            <Button variant="text">Login</Button><br />
            </Link>
          <Link to='/prdct'>
            <Button variant="contained" onClick={addHandler}>Submit </Button>
          </Link>
       
        
        
        
    </div>
  )
}

export default SignUp