import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      light: '#fff',
      dark: '#0f0f0f',
      main: '#fff',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
