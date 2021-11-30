import React from 'react';
import logo from 'logo.svg';
import { Box } from '@mui/material';

const BackCard = () => {
  const bg = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )})`;

  return (
    <Box
      border={1}
      maxWidth={150}
      bgcolor={bg}
      height={170}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <img src={logo} className="App-logo" alt="logo" />
    </Box>
  );
};

export default BackCard;
