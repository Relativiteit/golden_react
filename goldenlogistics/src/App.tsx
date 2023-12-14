import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ProTip from './ProTip';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import goldenlogisticsImage from './assets/goldenlogistics.jpeg'; // Use import to load the image
import { Button, Modal } from '@mui/material';
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
          <h4>Golden Logistics, wij helpen u met al uw vervoer wensen!</h4>
       </Typography>
       <img
          src={goldenlogisticsImage}
          alt="Golden Logistics"
          style={{
            display: 'flex',
            margin: 'auto',
            width: '100%',
            maxWidth: '100%',
            height: 'auto',
          }}
        /> 
        <Button variant="contained" sx={{ fontSize: '3rem', padding: '15px 30px', marginTop: -130 }} onClick={showPhoneModal} >
          Neem Contact op per Telefoon!
          </Button>  

          <Modal open={isPhoneModalOpen} onClose={hidePhoneModal}>
          <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: '2px solid #000', p: 4 }}>
            <Typography variant="h6" component="h2" gutterBottom>
              Contact Information
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: +1234567890 {/* Replace this with your client's phone number */}
            </Typography>
          </Box>
        </Modal>
       <ProTip  />
        <Copyright />
      </Box>

      </Box>
    
  );
}
