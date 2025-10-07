import { useState } from 'react';
import { Fab } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import { SettingsModal } from './settings-modal.tsx';

export const SettingsFab = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <>
      <Fab
        aria-label={'update-settings'}
        color={'primary'}
        sx={{ position: 'fixed', bottom: 24, right: 24 }}
        onClick={() => setOpen(true)}
      >
        <SettingsIcon />
      </Fab>
      <SettingsModal open={open} onClose={handleClose} />
    </>
  );
};
