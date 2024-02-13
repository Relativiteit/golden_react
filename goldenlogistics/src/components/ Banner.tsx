import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import truckRowImage from '../assets/truck_row.jpeg';

function Banner() {
  const images = [truckRowImage];
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Change image every few seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const currentImage = images[currentImageIndex];

  return (
    <Box
      sx={{
        position: 'relative',
        height: '50vh', // Set your desired height
        overflow: 'hidden',
        marginTop: 0,
        marginBottom: 0,

      }}
    >
      <img
        src={currentImage}
        alt="Golden Logistics"
        style={{
          width: '100vw', // span entire width
          height: '100%',
          objectFit: 'cover',
          marginTop: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '100%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: 'white',
          padding: '20px',
          backgroundColor: '#f5f5f5'
          
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }} 
            style={{ 
            color: 'white', // Standard
            fontSize: '2rem', // Adjust the font size as needed
                 }}
>
            Altijd Gouden Kwaliteit
        </Typography>
        <Typography variant="body1" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.6)' }}>
            Samen met u, gaan we verder dan logistiek. Meer dan alleen uw internationale logistieke partner. Wij brengen de beloften die u aan uw klanten maakt tot leven. Met ondernemingszin en een persoonlijke benadering ontzorgen we u met op maat gemaakte end-to-end supply chain-oplossingen. In de markten van Machines, Industrie en Chemie.

            Wij kijken verder dan logistiek. Wij zijn Golden Logistics, waar we niet alleen zaken doen, maar waar we een familie zijn.        
        </Typography>
      </Box>
    </Box>
  );
}

export default Banner;
