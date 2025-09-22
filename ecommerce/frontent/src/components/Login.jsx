import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const [input, setInput] = useState({ Email: "", Password: "" })
  const navigate = useNavigate()

  const inputHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
    console.log(input)
  }

  const loginHandler = () => {
    axios.post("http://localhost:3004/login", input)
      .then((res) => {
        alert(res.data.message)
        console.log(res.data.message)
        if (res.data.message === "Logged in successfully") {
          localStorage.setItem('user', JSON.stringify({
          Email:res.data.Email,
          Name: res.data.Name,
          Password:res.data.Password,
          userType: res.data.userType,
          id: res.data.userId
        }))

        // Save user email in localStorage
      localStorage.setItem("user", res.data.Email);
          
          if (res.data.userType === "admin") {
            navigate("/admn");
          } else {
            navigate("/prdct");
          }
        }
          else {
      alert("Invalid login");
        }
      })


      .catch((err) => {
        console.log("Login error:", err)
        alert("An error occurred during login")
      })
  }
  return (
    <div>
     <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #f3e9dc, #e07a5f)",
      }}
    >
        <Paper
        elevation={6}
        sx={{
          p: 4,
          width: 350,
          borderRadius: 3,
          textAlign: "center",
        }}
      >
         <Typography variant="h5" fontWeight="bold" gutterBottom>
          Login
        </Typography>
         <TextField
       fullWidth
          variant="outlined"
          margin="normal"
          label="Email"
          name="Email"
        value={input.Email}
        onChange={inputHandler}
      /><br /><br />

      <TextField
        fullWidth
          variant="outlined"
          margin="normal"
          label="Password"
          name="Password"
          type="password"
        value={input.Password}
        onChange={inputHandler}
      /><br /><br />
 
       <Typography variant="body2" sx={{ mt: 2 }}>
          Don’t have an account?{" "}
          <Link to="/sn" style={{ textDecoration: "none", color: "#e07a5f" }}>
            Sign Up
          </Link>
         </Typography>    
         <Box sx={{ mt: 2 }}>
      <Button variant="contained"
            fullWidth
            sx={{
              backgroundColor: "var(--color-accent, #e07a5f)",
              "&:hover": { backgroundColor: "var(--color-highlight, #c44536)" },
            }} onClick={loginHandler}>Login</Button>
              </Box>
               </Paper> 
               </Box> 
    </div>
  )
}

export default Login