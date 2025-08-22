import { Link } from 'react-router-dom'
import React from 'react'
import { Button } from '@mui/material'

const Login = () => {
  return (
    <div>
     
     
         <h1>login page</h1>
        name: <input type="text" name="" id="" /> &nbsp;
        email: <input type="email" name="" id="" /> <br /> <br />
        password: <input type="password" name="" id="" /> <br /> <br/>
       
       <Link to='/sn'>
        <Button variant="text">SignUp</Button>
       </Link>&nbsp;
             
               <Link to='/prdct'> 
               <input type="button" value="submit" />
                 </Link>
                 
    </div>
  )
}

export default Login