// File: BannerContent.js
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function BannerContent() {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '80%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        color: 'black',
        padding: '30px',
        backgroundColor: '#f4c216',
        opacity: 1 
        // Semi-transparent background
      }}
    >
        <Typography variant='h5'>
            vraag direct vrijblijvend een offerte aan 
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2 }}>
        <Typography variant="body1" >
         
        </Typography>
       
      </Box>
      <Typography variant="body1" sx={{ mt: 2 }}>
      Op zoek naar logistieke oplossingen op maat? Klik op "Offerte" en ontvang snel een persoonlijke offerte die aan uw behoeften voldoet.      </Typography>
      <Button variant="contained" sx={{ ml: 2, color: 'black', backgroundColor: '#f5f5f5', width: 'fit-content'  }}>
          Offerte
        </Button>
    </Box>
  );
}

export default BannerContent;
