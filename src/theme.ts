import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6126cd',
    },
    secondary: {
      main: '#ff0',
    },
    error: {
      main: "#f00",
    },
  },
});

export default theme;