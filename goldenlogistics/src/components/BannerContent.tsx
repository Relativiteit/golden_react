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
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        color: 'black',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        opacity: 0.9 
        // Semi-transparent background
      }}
    >
        <Typography variant='h5'>
            Golden Logistics brengt u verder
        </Typography>
      <Typography variant="body1">
        Samen met u, gaan we verder dan logistiek. Meer dan alleen uw internationale logistieke partner. Wij brengen de beloften die u aan uw klanten maakt tot leven. Met ondernemingszin en een persoonlijke benadering ontzorgen we u met op maat gemaakte end-to-end supply chain-oplossingen. In de markten van Machines, Industrie en Chemie.
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Wij kijken verder dan logistiek. Wij zijn Golden Logistics, waar we niet alleen zaken doen, maar waar we een familie zijn.
      </Typography>
      <Button variant="contained" sx={{ mt: 2 }}>
        Contact
      </Button>
    </Box>
  );
}

export default BannerContent;
