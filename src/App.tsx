import React from 'react';
import './App.css';
import { CardsProvider } from 'store/context';
import { Container } from '@mui/material';

import MainDrawer from './common/MainDrawer';
import Share from './common/Share';
import Toast from './common/Toast';
import StartArray from './core/arrays/StartArray';
import Header from 'common/Header';
import { I18nextProvider } from 'react-i18next';
import i18n from 'translate';
import BottomDrawer from './common/BottomDrawer';

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <CardsProvider>
        <Container style={{ minHeight: '100vh' }}>
          <Header />
          <StartArray />
          <MainDrawer />
          <Share />
          <Toast />
          <BottomDrawer />
        </Container>
      </CardsProvider>
    </I18nextProvider>
  );
};

export default App;
