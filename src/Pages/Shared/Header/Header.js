import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
  const { user, logout } = useAuth()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ color: 'text.disabled' }}>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Hero Riders
          </Typography>
          <Link to="/home" style={{ textDecoration: 'none', color: 'white' }}><Button color="inherit">Home</Button></Link>
         

          <Box>
            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/about">
              <Button color="inherit">About</Button>
            </NavLink>

          </Box>
          <Box>
            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/programs">
              <Button color="inherit">Our Programms</Button>
            </NavLink>

          </Box>

          <Box>
            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/services">
              <Button color="inherit">Services</Button>
            </NavLink>

          </Box>

          {
            user?.email ?
              <Box>
                <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
                  <Button color="inherit">Dashboard</Button>
                </NavLink>
                <Button onClick={logout} color="inherit">Logout</Button>
              </Box>
              :
              <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                <Button color="inherit">Login </Button>
              </NavLink>
          }




        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;