import React, { FC } from 'react';
import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material';

interface Props {
  open: boolean;
  handleClose: () => void;
  handleConfirm: () => void;
  title: string;
  confirm?: string;
  cancel?: string;
}

const DialogSmall: FC<Props> = (props) => {
  const { open, handleClose, handleConfirm, title, confirm = 'Yes', cancel = 'Cancel' } = props;

  return (
    <Dialog open={open} keepMounted onClose={handleClose} aria-labelledby="alert-dialog-slide-title">
      <DialogTitle id="alert-dialog-slide-title">{title}</DialogTitle>
      <DialogActions>
        <Button onClick={handleClose} color="primary" variant="contained">
          {cancel}
        </Button>
        <Button onClick={handleConfirm} color="secondary" variant="contained">
          {confirm}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogSmall;
