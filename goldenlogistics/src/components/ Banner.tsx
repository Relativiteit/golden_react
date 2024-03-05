import * as React from 'react';
import Box from '@mui/material/Box';
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
    <Box // header picture
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

      </Box>
    
  );
}

export default Banner;
