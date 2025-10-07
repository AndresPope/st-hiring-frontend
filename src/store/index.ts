import { configureStore } from '@reduxjs/toolkit';
import eventsReducer from '../features/events/events-slice.ts';
import settingsReducer from '../features/settings/settins-slice.ts';

const store = configureStore({
  reducer: {
    events: eventsReducer,
    settings: settingsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
