import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography align='center' sx={{ flexGrow: 7 }} style={{color:"AppWorkspace"}} fontStyle={'bold'}>BLOG</Typography>
                <Button variant='text' color='inherit'><Link to={'/home'} style={{textDecoration:'none',color:'white'}}>Home</Link></Button>&nbsp;
                <Button variant='text' color='inherit'><Link to={'/add'}style={{textDecoration:'none',color:'white'}}>Add Blogs</Link></Button>&nbsp;
               
            </Toolbar>
        </AppBar>
        
       
    </div>
  )
}

export default Navbar