import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Admin = () => {
  return (
    <div>
       
      <AppBar>
        <Toolbar>
          <h4>Shoppee</h4>
            <Link to='/add'>
        <Button variant='contained'>Add</Button>
        </Link> &nbsp; &nbsp;
        <Link to='/view'>
        <Button variant='contained'>View</Button>
        </Link>&nbsp; &nbsp;
        <Link to='/'>
        <Button variant='contained'>LogOut</Button>
        </Link>
        </Toolbar>
      </AppBar>
      
    </div>
  )
}

export default Admin