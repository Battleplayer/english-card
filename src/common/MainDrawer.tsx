import Drawer from '@mui/material/Drawer';
import { useContext } from 'react';
import CardsContext from 'store/context';
import OpenedCard from 'core/cards/OpenedCard';

const MainDrawer = () => {
  const { isDrawerOpened } = useContext(CardsContext);

  return (
    <Drawer transitionDuration={{ enter: 400, exit: 1000 }} anchor="right" open={isDrawerOpened}>
      <OpenedCard />
    </Drawer>
  );
};
export default MainDrawer;
