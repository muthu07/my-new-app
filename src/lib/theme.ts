'use client';
import { createTheme, Theme } from '@mui/material/styles';

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: 'var(--font-geist-sans)',
    h1: {
      fontFamily: 'var(--font-geist-sans)',
    },
    h2: {
      fontFamily: 'var(--font-geist-sans)',
    },
    h3: {
      fontFamily: 'var(--font-geist-sans)',
    },
    h4: {
      fontFamily: 'var(--font-geist-sans)',
    },
    h5: {
      fontFamily: 'var(--font-geist-sans)',
    },
    h6: {
      fontFamily: 'var(--font-geist-sans)',
    },
    body1: {
      fontFamily: 'var(--font-geist-sans)',
    },
    body2: {
      fontFamily: 'var(--font-geist-sans)',
    },
    button: {
      fontFamily: 'var(--font-geist-sans)',
    },
    caption: {
      fontFamily: 'var(--font-geist-sans)',
    },
    overline: {
      fontFamily: 'var(--font-geist-sans)',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          fontFamily: 'var(--font-geist-sans)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-input': {
            fontFamily: 'var(--font-geist-sans)',
          },
          '& .MuiInputLabel-root': {
            fontFamily: 'var(--font-geist-sans)',
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'var(--font-geist-sans)',
        },
      },
    },
    // For code blocks, use the mono font
    // MuiCode: {
    //   styleOverrides: {
    //     root: {
    //       fontFamily: 'var(--font-geist-mono)',
    //     },
    //   },
    // },
  },
});

export default theme;