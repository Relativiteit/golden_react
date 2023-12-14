import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}  style={{ 
  color: 'white',
  WebkitTextStroke: '1px #FFD700', // For Webkit (Chrome, Safari)
  textStroke: '1px #FFD700', // Standard
  fontSize: '2rem', // Adjust the font size as needed
}}>
            Golden Logistics
          </Typography>
          <Button color="inherit">Diensten</Button>
          <Button color="inherit">Offerte</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}