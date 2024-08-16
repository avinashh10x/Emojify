// src/theme.js
import { createTheme } from '@mui/material';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#FFC107', // Yellow color for primary
    },
    secondary: {
      main: '#FF5722', // Deep Orange for secondary
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFC107', // Yellow color for all buttons
          color: '#FFFFFF', // White text color
          '&:hover': {
            backgroundColor: '#FFB300', // Darker yellow on hover
          },
        },
      },
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FFC107', // Yellow color for primary
    },
    secondary: {
      main: '#FF5722', // Deep Orange for secondary
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFC107', // Yellow color for all buttons
          color: '#FFFFFF', // White text color
          '&:hover': {
            backgroundColor: '#FFB300', // Darker yellow on hover
          },
        },
      },
    },
  },
});

export { lightTheme, darkTheme };
