// File: BannerContent.js
import React from 'react';
import Box from '@mui/material/Box';

function BannerContent({ position, picture }) {
  return (
    <Box
      sx={{
        position: 'absolute',
        ...position, // Apply the position passed as prop
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        color: 'black',
        padding: '30px',
        backgroundColor: '#191717',
        opacity: 1 
      }}
    >
      <img src={picture} alt="Picture" />
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2 }}>
        {/* Additional content if needed */}
      </Box>
    </Box>
  );
}

export default BannerContent;
