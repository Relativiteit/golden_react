import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const buttonStyle = {
  marginRight: 8,
  '&:hover': {
    backgroundColor: '#f4c216', // Change background color on hover
    color: 'black', // Change text color on hover
  },
};
const buttonStyleIcon = {
  marginRight: 2,
  '&:hover': {
    backgroundColor: '#f4c216', // Change background color on hover
    color: 'black', // Change text color on hover
  },
};

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}> 
             <Toolbar >
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ ...buttonStyleIcon, position: 'absolute', top: 5, right: 20 }}
            s
            >
            <MenuIcon />
          
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}  style={{ color: 'white', 
          WebkitTextStroke: '1px #FFD700', // For Webkit (Chrome, Safari)textStroke: '1px #FFD700', // Standard
          fontSize: '2rem', // Adjust the font size as needed
            }}>
            Golden Logistics
          </Typography>
          <Button color="inherit" sx={{ ...buttonStyle }}>Home</Button> {/* Adjust margin right */}          
          <Button color="inherit" sx={{ ...buttonStyle }}>About</Button> {/* Adjust margin right */}
          <Button color="inherit" sx={{ ...buttonStyle }}>Offerte</Button> {/* Adjust margin right */}  
          <Button color="inherit" sx={{ ...buttonStyle }}>Contact</Button> {/* Adjust margin right */}  

  

          </Toolbar>
      </AppBar>
    </Box>
  );
}