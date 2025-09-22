import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const NavBar = () => {
  return (
    <div>
        <AppBar      position="static" 
      sx={{ 
        backgroundColor: "var(--color-primary)", 
        padding: "0.5rem 1rem" 
      }}>
                <Toolbar>
                  <Typography 
          variant="h6" 
          sx={{ flexGrow: 1, fontWeight: "bold", color: "white" }}
         >Decora</Typography>
         <Box sx={{ display: "flex", gap: 2 }}>

                  <Link to='/prdct' style={{ textDecoration: "none" }}>
                  <Button variant="contained" 
              sx={{ 
                backgroundColor: "var(--color-accent)", 
                "&:hover": { backgroundColor: "var(--color-highlight)" } 
              }}>
                   <HomeIcon /></Button>
                </Link>&nbsp;&nbsp;&nbsp;
                 
                <Link to='/wl' style={{ textDecoration: "none" }}>
               <Button variant="contained"
              sx={{ 
                backgroundColor: "var(--color-accent)", 
                "&:hover": { backgroundColor: "var(--color-highlight)" } 
              }}><FavoriteIcon/>Wishlist</Button>
                </Link>&nbsp;&nbsp;&nbsp;
                <Link to='/crt' style={{ textDecoration: "none" }}>
               <Button variant="contained"
              sx={{ 
                backgroundColor: "var(--color-accent)", 
                "&:hover": { backgroundColor: "var(--color-highlight)" } 
              }}><ShoppingCartIcon/>Cart</Button>
                </Link>&nbsp;&nbsp;&nbsp;
                 
                 <Link to='/pymnt' style={{ textDecoration: "none" }}>
                  <Button         variant="contained"
              sx={{ 
                backgroundColor: "var(--color-accent)", 
                "&:hover": { backgroundColor: "var(--color-highlight)" } 
              }}>Payment</Button>
                </Link>
                </Box>&nbsp;&nbsp;&nbsp;
                
                 
                  <Box sx={{ marginLeft: "auto" }}>
                  <Link to='/prfl' style={{ textDecoration: "none" }}>
                  <Button variant="contained" 
              sx={{ 
                backgroundColor: "var(--color-accent)", 
                "&:hover": { backgroundColor: "var(--color-highlight)" } 
              }}><AccountCircleIcon/></Button>
                </Link>
                </Box>&nbsp;&nbsp;&nbsp;
                </Toolbar>
              </AppBar>
    </div>
  )
}

export default NavBar