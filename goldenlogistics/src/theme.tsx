import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#191717',
      light: ''
    },
    secondary: {
      main: '#f4c216',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
