import Typography from '@mui/material/Typography';
import BusinessIcon from '@mui/icons-material/Business';



export default function ProTip() {
  return (
    <Typography sx={{ mt: 6, mb: 3 }} color="text.secondary" align='center'>
      <BusinessIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
      {'KVK: 80446132  '}
      
    </Typography>
  );
}
