import { useState } from 'react';
import { IconButton, Snackbar, Stack, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useAppSelector } from '../../hooks/store.ts';
import { useRequestSettings } from '../../hooks/settings/use-request-settings.ts';
import { Clear } from '@mui/icons-material';

export const GetClientSettings = () => {
  const [clientId, setClientId] = useState<string>('');
  const {
    loading,
    handleRequestSettings,
    handleOpen,
    message,
    open,
    resetState,
  } = useRequestSettings();
  const settings = useAppSelector((state) => state.settings.settings);

  return (
    <>
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <TextField
          disabled={loading || Boolean(settings)}
          variant="standard"
          label={'Client Id'}
          onChange={(e) => setClientId(e.target.value)}
          value={clientId}
        />
        {settings ? (
          <IconButton
            onClick={() => {
              setClientId('');
              resetState();
            }}
          >
            <Clear />
          </IconButton>
        ) : (
          <IconButton
            disabled={loading}
            onClick={() => handleRequestSettings(clientId)}
          >
            <SendIcon />
          </IconButton>
        )}
      </Stack>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => handleOpen(false)}
        message={message}
      />
    </>
  );
};
