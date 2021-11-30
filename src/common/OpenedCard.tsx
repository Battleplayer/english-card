import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { useState, Fragment } from 'react';
import { Box } from '@mui/material';

const OpenedCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => setIsOpen(open);

  return (
    <Fragment>
      <Button onClick={toggleDrawer(true)}>open me</Button>
      <Drawer anchor={'right'} open={isOpen} onClose={toggleDrawer(false)}>
        <Box style={{ width: '80vw' }}>
          <span>213</span>
        </Box>
      </Drawer>
    </Fragment>
  );
};
export default OpenedCard;
