import { updateSettings } from '../../api/settings.ts';
import { setSettings } from '../../features/settings/settins-slice.ts';
import { useState } from 'react';
import { useAppDispatch } from '../store.ts';
import { Settings } from '../../types/settings.ts';

export const useUpdateSettings = (clientId: number) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const dispatch = useAppDispatch();

  const handleOpen = (value: boolean) => setOpen(value);

  const handleSubmit = async (values: Settings) => {
    setLoading(true);
    try {
      const updateResponse = await updateSettings(clientId, values);
      dispatch(setSettings(updateResponse.settings));
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

  return {
    handleSubmit,
    open,
    message,
    loading,
    handleOpen,
  };
};
