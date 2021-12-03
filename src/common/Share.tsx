import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

const actions = [
  {
    icon: <FileCopyIcon />,
    name: 'Copy',
    handleClick: () => {
      console.log('click1');
    },
  },
  {
    icon: <SaveIcon />,
    name: 'Save',
    handleClick: () => {
      console.log('click2');
    },
  },
  {
    icon: <PrintIcon />,
    name: 'Print',
    handleClick: () => {
      console.log('click3');
    },
  },
  {
    icon: <ShareIcon />,
    name: 'Share',
    handleClick: () => {
      console.log('click4');
    },
  },
];

const BasicSpeedDial = () => {
  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={action.handleClick}
          />
        ))}
      </SpeedDial>
    </Box>
  );
};
export default BasicSpeedDial;
