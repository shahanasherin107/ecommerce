import { Avatar, Button, TextField } from '@mui/material'
import React from 'react'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <div>
      <NavBar/>
     <br/><h3>profile</h3>
    
    <Avatar></Avatar>
     <TextField label="Name" variant="standard"/><br/>
     <TextField label="Phone" variant="standard"/><br/>
     <TextField label="Email" variant="standard"/><br/><br/>
     <Link to='/'>
     <Button variant="contained">LogOut</Button>
      </Link> 
      </div>
  )
}

export default Profile