import { createSlice } from '@reduxjs/toolkit';
import { CampaignData } from '../features/campaign/models/campaignData'; // Modelleri içe aktar
import { createCampaign, deleteCampaign, fetchCampaigns } from '../api/campaignApi'; // Yeni api dosyasından işlemi içe aktar

export interface CampaignState {
  campaigns: CampaignData[];
  loading: boolean; // Loading durumu
  error: string | null; // Hata durumu için string veya null
}

const initialState: CampaignState = {
  campaigns: [],
  loading: false,
  error: null,
};

const campaignSlice = createSlice({
  name: 'campaigns',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCampaigns.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCampaigns.fulfilled, (state, action) => {
      state.campaigns = action.payload;
      state.loading = false; // Yükleme tamamlandı, loading durumunu false yap
    });
    builder.addCase(fetchCampaigns.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload ? action.payload.message : 'An error occurred'; // Eğer action.payload varsa ve message içeriyorsa kullan, yoksa 'An error occurred'
    });

    builder.addCase(deleteCampaign.pending, (state) => {
      state.loading = true; // Silme işlemi başlatıldığında loading durumu true yap
    });
    builder.addCase(deleteCampaign.fulfilled, (state, action) => {
      const deletedCampaignId = action.meta.arg; // Silinen kampanyanın kimliği
      state.campaigns = state.campaigns.filter(campaign => campaign.campaign.id !== deletedCampaignId);
      state.loading = false;
    });
    builder.addCase(deleteCampaign.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "An error occurred";
    });

    builder.addCase(createCampaign.pending, (state) => {
      state.loading = true; // Yükleme işlemi başlatıldığında loading durumu true yap
    });
    builder.addCase(createCampaign.fulfilled, (state, action) => {
      state.campaigns.push(action.payload); //yeni ekleme var sakın state.campaign = action.payload deme!
      state.loading = false; // Yükleme tamamlandı, loading durumunu false yap
    });
    builder.addCase(createCampaign.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "An error occurred";
    });

  },
});

export const { clearError } = campaignSlice.actions;

export default campaignSlice.reducer;
