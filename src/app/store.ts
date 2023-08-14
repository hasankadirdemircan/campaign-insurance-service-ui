// src/app/store.ts

import { configureStore } from '@reduxjs/toolkit';
import campaignReducer from '../features/campaign/campaignSlice';

export const store = configureStore({
  reducer: {
    campaigns: campaignReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
