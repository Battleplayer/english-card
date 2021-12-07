import React, { CSSProperties, FC } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Loader: FC<{ styles: CSSProperties }> = ({ styles }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', ...styles }}>
    <CircularProgress />
  </Box>
);

export default Loader;
