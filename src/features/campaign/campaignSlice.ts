import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Campaign } from './campaignTypes';

export interface CampaignState {
  value: Campaign[];
}

const initialState: CampaignState = {
  value: [],
};

const campaignSlice = createSlice({
  name: 'campaign',
  initialState,
  reducers: {
    createCampaign: (state, action: PayloadAction<Campaign>) => {
      state.value.push(action.payload);
    },
  },
});

export const { createCampaign } = campaignSlice.actions;

export default campaignSlice.reducer;
