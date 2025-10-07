import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import { GetClientSettings } from './get-client-settings.tsx';
import { useAppDispatch, useAppSelector } from '../../hooks/store.ts';
import { UpdateSettingsForm } from './update-settings-form.tsx';
import { Close } from '@mui/icons-material';
import { setSettings } from '../../features/settings/settins-slice.ts';

type Props = {
  open: boolean;
  onClose: () => void;
};

export const SettingsModal = ({ open, onClose }: Props) => {
  const settings = useAppSelector((state) => state.settings.settings);
  const dispatch = useAppDispatch();

  const handleCloseModal = () => {
    dispatch(setSettings(null));
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleCloseModal}>
      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between' }}>
        Settings
        <IconButton onClick={handleCloseModal}>
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <GetClientSettings />
        {settings && <UpdateSettingsForm settings={settings} />}
      </DialogContent>
    </Dialog>
  );
};
