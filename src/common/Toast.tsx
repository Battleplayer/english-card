import * as React from 'react';

import Snackbar from '@mui/material/Snackbar';

import { FC, useContext } from 'react';
import CardsContext from 'store/context';

const Toast: FC = () => {
  const { isSnackBarOpened, snackMessage, setSnackBarOpened } = useContext(CardsContext);

  return (
    <Snackbar
      autoHideDuration={1500}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={isSnackBarOpened}
      message={snackMessage}
      key={Math.random()}
      onClose={() => setSnackBarOpened(false)}
    />
  );
};

export default Toast;
