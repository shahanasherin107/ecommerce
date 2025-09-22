import { Avatar, Box, Button, Paper, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Profile = () => {
   const [user, setUser] = useState({ Name: "", Phone: "", Email: "" });

  useEffect(() => {
    
    const email = localStorage.getItem("user");

    if (email) {
      axios.get(`http://localhost:3004/user/${email}`)
        .then(res => {
          setUser(res.data);
        })
        .catch(err => console.log(err));
    }
  }, []);
       
  return (
    <div>
      <NavBar/>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 5,
        }}
      >
      <Paper
          elevation={6}
          sx={{
            p: 4,
            width: 400,
            borderRadius: 3,
            textAlign: "center",
          }}
        >
     <Typography variant="h6" sx={{ mt: 2, mb: 3 }}>
            Profile
          </Typography>
    
    <Avatar sx={{
              width: 80,
              height: 80,
              bgcolor: "#e07a5f",
              mx: "auto",
              fontSize: 28,
            }}
          >
            {user.Name ? user.Name.charAt(0).toUpperCase() : ""}
            </Avatar>
     <TextField
            fullWidth
            label="Name"
            value={user.Name}
            variant="outlined"
            margin="normal"
            
          />
          <TextField
            fullWidth
            label="Phone"
            value={user.Phone}
            variant="outlined"
            margin="normal"
            
          />
          <TextField
            fullWidth
            label="Email"
            value={user.Email}
            variant="outlined"
            margin="normal"
            
          />

     <Link to='/'>
     <Button variant="contained"
            sx={{
              mt: 3,
              backgroundColor: "#e07a5f",
              "&:hover": { backgroundColor: "#c44536" },
            }}>LogOut</Button>
      </Link> 
      </Paper>
      </Box>
      </div>
  )
}

export default Profile