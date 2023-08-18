// src/app/store.ts

import { combineReducers } from '@reduxjs/toolkit';
import campaignReducer from './campaignSlice';

const rootReducer = combineReducers({
  campaign: campaignReducer,
  // Diğer reducer'ları buraya ekleyin
});

export default rootReducer;