import { useContext } from 'react';
import Drawer from '@mui/material/Drawer';
import CardsContext from 'store/context';
import loadable from '@loadable/component';

const OpenedCard = loadable(() => import('core/cards/OpenedCard'));

const ActiveCardDrawer = () => {
  const { isDrawerOpened } = useContext(CardsContext);
  return (
    <Drawer transitionDuration={{ enter: 400, exit: 1000 }} anchor="right" open={isDrawerOpened}>
      <OpenedCard />
    </Drawer>
  );
};
export default ActiveCardDrawer;
