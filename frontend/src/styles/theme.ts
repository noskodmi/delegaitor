import { type Theme } from '@emotion/react';
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
          }
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          padding: '16px',
          color: 'unset !important'
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
    background: {
      default: '#f5f5f5',
      paper: '#20153B',
    },
    text: {
      primary: '#000000',
      secondary: '#5D5FEF',
    },
  },
  ...commonTheme,
});

export const darkTheme: Theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#5D5FEF'
    },
    secondary: {
      main: '#20153B'
    },
    background: {
      default: '#0F091F',
      paper: '#20153B',
    },
    text: {
      primary: '#ffffff',
      secondary: '#5D5FEF',
    },
  },
  ...commonTheme,
});
