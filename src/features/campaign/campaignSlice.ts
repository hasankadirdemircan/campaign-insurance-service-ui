// src/features/campaignSlice.ts

import { createSlice } from '@reduxjs/toolkit';
import { CampaignData } from './models/campaignData'; // Modelleri içe aktar
import { fetchCampaigns } from '../../api/campaignApi'; // Yeni api dosyasından işlemi içe aktar

export interface CampaignState {
  campaigns: CampaignData[];
}

const initialState: CampaignState = {
  campaigns: [],
};

const campaignSlice = createSlice({
  name: 'campaigns',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchCampaigns.fulfilled, (state, action) => {
      state.campaigns = action.payload;
    });
  },
});

export default campaignSlice.reducer;
