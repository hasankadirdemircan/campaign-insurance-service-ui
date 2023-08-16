// src/features/campaignSlice.ts

import { createSlice } from '@reduxjs/toolkit';
import { CampaignData } from './models/campaignData'; // Modelleri içe aktar
import { deleteCampaign, fetchCampaigns } from '../../api/campaignApi'; // Yeni api dosyasından işlemi içe aktar

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
    builder.addCase(deleteCampaign.fulfilled, (state, action) => {
      const deletedCampaignId = action.meta.arg; // Silinen kampanyanın kimliği
      state.campaigns = state.campaigns.filter(campaign => campaign.campaign.id !== deletedCampaignId);
    });
  },
});

export default campaignSlice.reducer;
