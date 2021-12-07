import { useCallback, useContext, useState } from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import FlareIcon from '@mui/icons-material/Flare';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import CardsContext from 'store/context';

const BasicSpeedDial = () => {
  const { setSnackBarMessage } = useContext(CardsContext);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const actions = [
    {
      icon: <FileCopyIcon />,
      name: 'Copy link to clipboard',
      handleClick: () => {
        // todo do I need it?
        // e.stopPropagation();
        navigator.clipboard.writeText(window.location.href);
        setSnackBarMessage('Link copied');
      },
    },
  ];

  return (
    <SpeedDial
      ariaLabel="Tell about us!"
      open={isOpen}
      onClick={toggleMenu}
      sx={{ position: 'absolute', bottom: 16, right: 16 }}
      icon={<FlareIcon />}
    >
      {actions.map((action) => (
        <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} onClick={action.handleClick} />
      ))}
    </SpeedDial>
  );
};
export default BasicSpeedDial;
