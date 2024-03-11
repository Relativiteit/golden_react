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
import BannerBlackContent from './components/BannerBlackContent';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center"  >
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
        <BannerBlackContent position={{ top: '80%', left: '30%' }} picture="./assets/truck_container.jpeg" />
        <BannerBlackContent position={{ top: '80%', left: '50%' }} picture="goldenlogistics\src\assets\truck_row.jpeg" />
        <BannerBlackContent position={{ top: '80%', left: '70%' }} picture="goldenlogistics\src\assets\truck_side.jpeg" />

        <Box sx= {{ position: 'absolute', bottom: '0%' ,left:'50%'}}> 
          <Typography component="legend">
           Klant tevredenheid
          </Typography>
          <Rating name="read-only" defaultValue={5} readOnly />
        </Box>


        


        <ProTip />
        <Box sx= {{ position: 'absolute', bottom: '10%' ,left:'50%'}}> 
         <Copyright />
         </Box>
      </Box>
    </Box>
  );
}
