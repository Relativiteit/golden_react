import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { Button, Divider, Modal, Rating } from '@mui/material';

import ProTip from './ProTip';
import Banner from  "./components/ Banner"
import BannerContent from './components/BannerContent';
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
        <Banner /> {/* Render the Banner component here */}
        <BannerContent/>
        <Divider />
        
        <Modal open={isPhoneModalOpen} onClose={hidePhoneModal}>
          <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', p: 4 }}>
            
            <Typography variant="body2" color="text.secondary" style={{ fontSize: '2rem' }}>
              Telefoon: +31618018080
            </Typography>
          </Box>
        </Modal>
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
