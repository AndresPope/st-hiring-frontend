import { Settings } from '../../types/settings.ts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SettingsState {
  settings: Settings | null;
}

const initialState: SettingsState = {
  settings: null,
};

export const settingSlice = createSlice({
  name: 'client-settings',
  initialState,
  reducers: {
    setSettings(state, action: PayloadAction<Settings | null>) {
      state.settings = action.payload;
    },
  },
});

export const { setSettings } = settingSlice.actions;
export default settingSlice.reducer;
