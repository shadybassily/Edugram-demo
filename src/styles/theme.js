import { createTheme } from '@mui/material';
import Quicksand from '../assets/fonts/Quicksand-VariableFont_wght.ttf';

// Create a theme instance.
const theme = createTheme({
   typography: {
      fontFamily: ['QuickSand', 'Inter', 'sans-serif'].join(','),
      letterSpacing: 0.32,
      useNextVariants: true,
      suppressDeprecationWarnings: true,
      h2: {
         fontSize: '3rem',
         '@media (max-width:1235px)': {
            fontSize: '2rem',
         },
      },
      h5: {
         '@media (max-width:1235px)': {
            fontSize: '1rem',
            fontWeight: 700,
         },
      },
   },
   components: {
      MuiCssBaseline: {
         styleOverrides: `
          @font-face {
            font-family: 'Quicksand';
            font-style: normal;
            font-display: swap;
            font-weight: 600;
            src: local('Quicksand'), local('Quicksand-SemiBold'), url(${Quicksand}) format('woff2');
            unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
          }
        `,
      },
   },
   palette: {
      primary: {
         main: '#28A19C',
      },
      secondary: {
         main: '#FFBA00',
      },
      gray: {
         dark: '#343434',
         light: '#70707065',
      },
   },
});

export default theme;
