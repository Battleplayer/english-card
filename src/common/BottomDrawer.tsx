import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import { useState } from 'react';

const BottomDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    setIsOpen(open);
  };

  const openD = () => setIsOpen(true);
  const closeD = () => setIsOpen(false);

  return (
    <div>
      <Button onClick={openD}>Bottom</Button>
      <SwipeableDrawer
        anchor={'bottom'}
        open={isOpen}
        onClose={() => {}}
        onOpen={() => {}}
        // onClose={toggleDrawer(false)} onOpen={toggleDrawer(true)}
      >
        <Box sx={{ width: 'auto', height: 100 }} role="presentation">
          <h1>hello</h1>
        </Box>
      </SwipeableDrawer>
    </div>
  );
};

export default BottomDrawer;
