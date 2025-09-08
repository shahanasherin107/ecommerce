import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const NavBar = () => {
  return (
    <div>
        <AppBar color='secondary'>
                <Toolbar>
                  <h4>Shoppee</h4>&nbsp;&nbsp;&nbsp;
                  <Link to='/prdct'>
                  <Button variant="contained">
                   <HomeIcon /></Button>
                </Link>&nbsp;&nbsp;&nbsp;
                 
                <Link to='/wl'>
               <Button variant="contained"><FavoriteIcon/>Wishlist</Button>
                </Link>&nbsp;&nbsp;&nbsp;
                <Link to='/crt'>
               <Button variant="contained"><ShoppingCartIcon/>Cart</Button>
                </Link>&nbsp;&nbsp;&nbsp;
                 
                 <Link to='/pymnt'>
                  <Button variant="contained">Payment</Button>
                </Link>&nbsp;&nbsp;&nbsp;
                
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  
                  <Link to='/prfl'>
                  <Button variant="contained"><AccountCircleIcon/></Button>
                </Link>&nbsp;&nbsp;&nbsp;
                </Toolbar>
              </AppBar>
    </div>
  )
}

export default NavBar