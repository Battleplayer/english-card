import React, { useContext } from 'react';
import CardsContext, { CardsProvider } from 'store/context';
import { Container, ThemeProvider } from '@mui/material';
import { Header, Share, Toast } from './common';
import { I18nextProvider } from 'react-i18next';
import i18n from 'translate';
import loadable from '@loadable/component';
import { lightTheme, darkTheme } from './MyTheme';
import { ColorModeContext } from './store/ColorModeContext';

const StartArray = loadable(() => import('core/arrays/StartArray'));
const BottomDrawer = loadable(() => import('common/drawers/BottomDrawer'));
const ActiveCardDrawer = loadable(() => import('common/drawers/ActiveCardDrawer'));

const App = () => {
  const { colorMode } = useContext(CardsContext);
  console.log(colorMode);

  return (
    // <ThemeProvider theme={colorMode === 'light' ? lightTheme : darkTheme}>

      <CardsProvider>
        <I18nextProvider i18n={i18n}>
          <Container style={{ minHeight: '100vh' }}>
            <Header />
            <StartArray />
            <ActiveCardDrawer />
            <Share />
            <Toast />
            <BottomDrawer />
          </Container>
        </I18nextProvider>
      </CardsProvider>
    // </ThemeProvider>
  );
};

export default App;
