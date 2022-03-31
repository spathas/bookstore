import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: `'Comfortaa', snad-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  palette: {
    type: 'light',
    primary: {
      main: '#253746',
      contrastText: '#cfc1a7',
    },
    secondary: {
      main: '#E8E8E8',
      contrastText: '#3b6491',
    },
    divider: '#ECEFF1',
    background: {
      default: '#FAFAFA',
      paper: '#ECEFF1',
    },
    text: {
      primary: '#263238',
      secondary: '#3b6491',
      disabled: 'rgba(38,50,56,0.38)',
      hint: 'rgba(38,50,56,0.38)',
    },
  },
});

export default theme;
