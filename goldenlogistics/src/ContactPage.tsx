import * as React from 'react';
import Typography from '@mui/material/Typography';

const ContactPage = () => {
  return (
    <div>
      <Typography variant="h3" align="center">Contact Us</Typography>
      <Typography variant="body1" align="center">For inquiries, please fill out the form below or contact us at:</Typography>
      <Typography variant="body1" align="center">Phone: 123-456-7890</Typography>
      <Typography variant="body1" align="center">Email: info@example.com</Typography>
      {/* Your contact form component can go here */}
    </div>
  );
}

export default ContactPage;
