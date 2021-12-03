import Drawer from '@mui/material/Drawer';

import { useContext } from 'react';

import CardsContext from 'store/context';
import OpenedCard from '../core/OpenedCard';

const OpenedDrawer = () => {
  const { isDrawerOpened } = useContext(CardsContext);

  return (
    <Drawer transitionDuration={{ enter: 700, exit: 1000 }} anchor={'right'} open={isDrawerOpened}>
      <OpenedCard />
    </Drawer>
  );
};
export default OpenedDrawer;
