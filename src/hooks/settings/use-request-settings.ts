import { getClientSettings } from '../../api/settings.ts';
import { setSettings } from '../../features/settings/settins-slice.ts';
import { useState } from 'react';
import { useAppDispatch } from '../store.ts';

export const useRequestSettings = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const dispatch = useAppDispatch();

  const handleOpen = (value: boolean) => setOpen(value);

  const handleRequestSettings = async (clientId: string) => {
    setLoading(true);
    try {
      if (clientId === '') {
        handleOpen(true);
        setMessage(`Client id cannot be empty`);
        return;
      }

      const id = Number(clientId);
      if (isNaN(id)) {
        handleOpen(true);
        setMessage(`Client id value is not a number`);
        return;
      }
      const clientSettings = await getClientSettings(id);
      dispatch(setSettings(clientSettings));
    } catch (e) {
      console.error(e);
      handleOpen(true);
      if (e instanceof Error) {
        setMessage(e.message);
      } else {
        setMessage('There was an error trying to retrieve client settings');
      }
    } finally {
      setLoading(false);
    }
  };

  const resetState = () => {
    setLoading(false);
    setMessage('');
    setLoading(false);
    dispatch(setSettings(null));
  };

  return {
    handleRequestSettings,
    open,
    message,
    loading,
    handleOpen,
    resetState,
  };
};
