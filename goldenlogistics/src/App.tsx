import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { Button, Divider, Modal, Rating } from '@mui/material';

import ProTip from './ProTip';
import Banner from  "./components/ Banner"
import BannerContent from './components/BannerContent';
import BannerYellowContent from './components/BannerYellowContent';
import ButtonAppBar from './components/ButtonAppBar';

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
  const [isPhoneModalOpen, setPhoneModalOpen] = React.useState(false);

  const showPhoneModal = () => {
    setPhoneModalOpen(true);
  };

  const hidePhoneModal = () => {
    setPhoneModalOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Box sx={{  textAlign: 'center' }}>
        <ButtonAppBar/>
        <Banner /> {/* Render the Banner component here */}
        <BannerContent/>
        <BannerYellowContent/>

        <Divider />
        
        <Divider />
        <Box sx= {{ position: 'absolute', top: '100%' ,left:'50%'}}> 
          <Typography component="legend">
           Klant tevredenheid
          </Typography>
          <Rating name="read-only" defaultValue={5} readOnly />
        </Box>

        


        <ProTip />
        <Copyright />
      </Box>
    </Box>
  );
}
