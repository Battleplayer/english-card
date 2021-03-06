import React, { useCallback, useContext, useState } from 'react';
import { AppBar, Box, Button, Container, MenuItem, Select, Typography } from '@mui/material';
import i18next from 'i18next';

import { useTranslation } from 'react-i18next';
import CardsContext from '../store/context';

const Header = () => {
  const { i18n } = useTranslation();
  const { toggleColorMode } = useContext(CardsContext);

  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value);
    localStorage.setItem('language', event.target.value);
  };

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  return (
    <AppBar position="static">
      <Container>
        <Button onClick={toggleColorMode} variant="text" color="secondary">
          change mode
        </Button>
        <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h3">Select a card</Typography>
          <p>{i18next.t('friend')}</p>
          <Select
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={i18n.language}
            label="Age"
            onChange={handleChange}
            style={{ minWidth: 85 }}
          >
            <MenuItem value="en">EN</MenuItem>
            <MenuItem value="ukr">UKR</MenuItem>
          </Select>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Header;
