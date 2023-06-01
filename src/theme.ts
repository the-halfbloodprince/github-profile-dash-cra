import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#865DFF',
    },
    secondary: {
      main: '#E384FF',
    },
    error: {
      main: "#f00",
    },
    text: {
      primary: '#fffffe',
      secondary: '#E384FF',
    },
    background: {
      default: '#191825',
      paper: '#865DFF',
    },
  },
});

export default theme;