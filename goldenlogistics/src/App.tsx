import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { Button, Modal, Rating } from '@mui/material';

import ResponsiveAppBar from './components/ResponsiveAppBar';
import ProTip from './ProTip';

import goldenlogisticsImage from './assets/goldenlogistics.jpeg'; 
import truckSideImage from './assets/truck_side.jpeg';
import truckRowImage from './assets/truck_row.jpeg';
import truckContainerImage from './assets/truck_container.jpeg';


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
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>      <ResponsiveAppBar/>
      <Box sx={{ my: 4, textAlign: 'center'}} >
        <Typography variant="h4" component="h1" gutterBottom align='center'>
          <h4>Golden Logistics, wij helpen u graag logistieke wensen!</h4>
       </Typography>
       <img
          src={goldenlogisticsImage}
          alt="Golden Logistics"
          style={{
            display: 'flex',
            margin: 'auto',
            width: '100%',
            maxWidth: '20%',
            height: 'auto',
          }}
        /> 

        
        <Button variant="contained" sx={{ 
          fontSize: '3rem', 
          padding: '15px 30px', 
          marginTop: -10, 
          marginBottom: 10, 
          position: 'relative' }} 
          onClick={showPhoneModal} >
          Neem Contact op per Telefoon!
          </Button>  

          <Modal open={isPhoneModalOpen} onClose={hidePhoneModal}>
          <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', p: 4 }}>
            <Typography variant="h6" component="h2" gutterBottom>
              Bellen is sneller!
            </Typography>
            <Typography variant="body2" color="text.secondary" style={{ fontSize: '2rem' }}>              
            Telefoon: +31618018080 
            </Typography>
          </Box>
        </Modal>

        
        


          <img
          src={truckRowImage}
          alt="Golden Logistics"
          style={{
            display: 'flex',
            margin: 'auto',
            width: '100%',
            maxWidth: '100%',
            height: 'auto',
          }}
        /> 

        <Typography component="legend"> Klant tevredenheid</Typography>\
          <Rating name="read-only" defaultValue={5}  readOnly/>
       <ProTip  />
        <Copyright />
      </Box>

      </Box>
    
  );
}
