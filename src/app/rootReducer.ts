import { combineReducers } from '@reduxjs/toolkit';
import campaignReducer from '../features/campaign/campaignSlice';

const rootReducer = combineReducers({
  campaign: campaignReducer,
  // Diğer reducer'ları buraya ekleyin
});

export default rootReducer;
