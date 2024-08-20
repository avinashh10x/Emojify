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
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#2196F3', // Blue background for cards
          color: '#000000', // Black text color
          borderRadius: 8, // Rounded corners for cards
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
        },
      },
    },
    MuiBox: {
      styleOverrides: {
        root: {
          backgroundColor: '#4CAF50', // Green background for boxes
          color: '#000000', // Black text color
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
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#2196F3', // Blue background for cards
          color: '#FFFFFF', // White text color in dark mode
          borderRadius: 8, // Rounded corners for cards
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)', // Darker shadow for depth
        },
      },
    },
    MuiBox: {
      styleOverrides: {
        root: {
          backgroundColor: '#4CAF50', // Green background for boxes
          color: '#FFFFFF', // White text color in dark mode
        },
      },
    },
  },
});

export { lightTheme, darkTheme };
