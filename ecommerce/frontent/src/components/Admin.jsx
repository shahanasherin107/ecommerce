import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Admin = () => {
  return (
    <div>
      <AppBar  position="static" 
      sx={{ 
        backgroundColor: "var(--color-primary)", 
        padding: "0.5rem 1rem" 
      }}>
        <Toolbar>
          <Typography 
          variant="h4" 
          sx={{ flexGrow: 1, fontWeight: "bold", color: "white" }}
         >Decora</Typography>
         

            <Link to='/add' style={{ textDecoration: "none" }}>
        <Button variant='contained' sx={{ 
                backgroundColor: "var(--color-accent)", 
                "&:hover": { backgroundColor: "var(--color-highlight)" } 
              }}>Add</Button>
        </Link> &nbsp; &nbsp;
        <Link to='/view' style={{ textDecoration: "none" }}>
        <Button variant='contained' sx={{ 
                backgroundColor: "var(--color-accent)", 
                "&:hover": { backgroundColor: "var(--color-highlight)" } 
              }}>View</Button>
        </Link>&nbsp; &nbsp;
        <Link to='/order' style={{ textDecoration: "none" }}>
        <Button variant='contained' sx={{ 
                backgroundColor: "var(--color-accent)", 
                "&:hover": { backgroundColor: "var(--color-highlight)" } 
              }}>Orders</Button>
        </Link>&nbsp; &nbsp;
        <Link to='/user' style={{ textDecoration: "none" }}>
        <Button variant='contained' sx={{ 
                backgroundColor: "var(--color-accent)", 
                "&:hover": { backgroundColor: "var(--color-highlight)" } 
              }}>Users</Button>
        </Link>&nbsp; &nbsp;
        <Link to='/' style={{ textDecoration: "none" }}>
        <Button variant='contained' sx={{ 
                backgroundColor: "var(--color-accent)", 
                "&:hover": { backgroundColor: "var(--color-highlight)" } 
              }}>LogOut</Button>
        </Link>
        </Toolbar>
      </AppBar>
      
    </div>
  )
}

export default Admin