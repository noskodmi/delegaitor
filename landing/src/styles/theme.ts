import { Theme } from '@emotion/react';
import { createTheme } from '@mui/material/styles';
import { Roboto } from 'next/font/google';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const commonTheme: Theme = {
  typography: {
    fontFamily: roboto.style.fontFamily,
    h3: {
      fontWeight: 700,
      fontSize: '2.5rem',
      '@media (min-width:600px)': {
        fontSize: '3rem',
      },
      '@media (min-width:960px)': {
        fontSize: '3.5rem',
      },
    },
    h4: {
      fontWeight: 600,
      fontSize: '2rem',
      '@media (min-width:600px)': {
        fontSize: '2.5rem',
      },
      color: 'text.primary',
    },
    h6: {
      fontWeight: 500,
      fontSize: '1.25rem',
      '@media (min-width:600px)': {
        fontSize: '1.5rem',
      },
      color: 'text.secondary',
    },
    body1: {
      fontSize: '1rem',
      color: '#777',
      margin: '0 auto',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          borderWidth: '3px',
          padding: '12px 30px',
          ':hover': {
            borderWidth: '3px',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          padding: '16px',
          color: 'unset !important',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          margin: '16px 0',
          borderColor: '#5D5FEF',
        },
      },
    },
  },
};

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#5D5FEF',
    },
    secondary: {
      light: '#CCCCCC', // Border color in default state
      main: '#888888',  // Border color on hover
    },
    error: {
      main: '#D32F2F', // Error state border color
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#000000',
      secondary: '#5D5FEF',
    },
    action: {
      disabled: '#E0E0E0', // Disabled state border color
    },
  },
  ...commonTheme,
});

export const darkTheme: Theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#5D5FEF',
    },
    secondary: {
      light: '#555555', // Border color in default state
      main: '#BBBBBB',  // Border color on hover
    },
    error: {
      main: '#EF5350', // Error state border color
    },
    background: {
      default: '#0F091F',
      paper: '#20153B',
    },
    text: {
      primary: '#ffffff',
      secondary: '#5D5FEF',
    },
    action: {
      disabled: '#757575', // Disabled state border color
    },
  },
  ...commonTheme,
});
