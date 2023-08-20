import { createSlice } from '@reduxjs/toolkit';
import { CampaignData } from '../features/campaign/models/campaignData'; // Modelleri içe aktar
import { deleteCampaign, fetchCampaigns } from '../api/campaignApi'; // Yeni api dosyasından işlemi içe aktar

export interface CampaignState {
  campaigns: CampaignData[];
  loading: boolean; // Loading durumu

}

const initialState: CampaignState = {
  campaigns: [],
  loading: false
};

const campaignSlice = createSlice({
  name: 'campaigns',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchCampaigns.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCampaigns.fulfilled, (state, action) => {
      state.campaigns = action.payload;
      state.loading = false; // Yükleme tamamlandı, loading durumunu false yap

    });
    builder.addCase(deleteCampaign.pending, (state) => {
      state.loading = true; // Silme işlemi başlatıldığında loading durumu true yap
    });
    builder.addCase(deleteCampaign.fulfilled, (state, action) => {
      const deletedCampaignId = action.meta.arg; // Silinen kampanyanın kimliği
      state.campaigns = state.campaigns.filter(campaign => campaign.campaign.id !== deletedCampaignId);
      state.loading = false;
    });
  },
});

export default campaignSlice.reducer;