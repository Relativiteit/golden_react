import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ProTip from './ProTip';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import goldenlogisticsImage from './assets/goldenlogistics.jpeg'; // Use import to load the image

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Golden Logistics
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function App() {
  return (
      <Box>
      <ResponsiveAppBar/>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Golden Logistics, wij helpen u met al uw vervoer wensen
       </Typography>
       <img src={goldenlogisticsImage} alt="Golden Logistics" /> {/* Use the imported image */}        <ProTip />
        <Copyright />
      </Box>

      </Box>
    
  );
}
