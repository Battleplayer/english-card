import createTheme from '@mui/material/styles/createTheme';

export const lightTheme = () =>
  createTheme({
    palette: {
      primary: {
        main: '#FFD700',
      },
      secondary: {
        main: '#2FF3E0',
      },
      error: {
        main: '#F51720',
      },
    },
    typography: {
      h1: {
        fontSize: '24px',
      },
      body1: {
        fontSize: '14px',
        fontWeight: 'bold',
      },
      subtitle1: {
        fontSize: '12px',
      },
    },
  });

export const darkTheme = () =>
  createTheme({
    palette: {
      primary: {
        main: 'pink',
      },
      secondary: {
        main: '#2FF3E0',
      },
      error: {
        main: '#F51720',
      },
    },
    typography: {
      h1: {
        fontSize: '24px',
      },
      body1: {
        fontSize: '14px',
        fontWeight: 'bold',
      },
      subtitle1: {
        fontSize: '12px',
      },
    },
  });
