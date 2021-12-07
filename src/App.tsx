import React from 'react';
import { CardsProvider } from 'store/context';
import { Container } from '@mui/material';
import { Header, Share, Toast } from './common';
import { I18nextProvider } from 'react-i18next';
import i18n from 'translate';
import loadable from '@loadable/component';

const StartArray = loadable(() => import('core/arrays/StartArray'));
const BottomDrawer = loadable(() => import('common/drawers/BottomDrawer'));
const ActiveCardDrawer = loadable(() => import('common/drawers/ActiveCardDrawer'));

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <CardsProvider>
        <Container style={{ minHeight: '100vh' }}>
          <Header />
          <StartArray />
          <ActiveCardDrawer />
          <Share />
          <Toast />
          <BottomDrawer />
        </Container>
      </CardsProvider>
    </I18nextProvider>
  );
};

export default App;
