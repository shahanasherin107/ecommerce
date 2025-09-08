import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { Button, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [input, setInput] = useState({ Email: "", Password: "" })
  const navigate = useNavigate()

  const inputHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
    console.log(input)
  }

  const loginHandler = () => {
    axios.post("http://localhost:3004/", input)
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
          
          if (res.data.userType === "admin") {
            navigate("/admin");
          } else {
            navigate("/user");
          }
        }
      })
  
      .catch((err) => {
        console.log("Login error:", err)
        alert("An error occurred during login")
      })
  }
  return (
    <div>
     
         <h1>login page</h1>
         <TextField
        variant='standard'
        label="Email"
        name="Email"
        value={input.Email}
        onChange={inputHandler}
      /><br /><br />

      <TextField
        variant='standard'
        label="Password"
        name='Password'
        type='password'
        value={input.Password}
        onChange={inputHandler}
      /><br /><br />
 
       <Link to='/sn'>
        <Button variant="text">SignUp</Button>
       </Link>&nbsp;
             
        
      <Button variant='cotained' onClick={loginHandler}>Login</Button>
              
                 
    </div>
  )
}

export default Login