import { createAsyncThunk } from '@reduxjs/toolkit';
import { Campaign, CreateCampaignRequest } from './campaignTypes';

export const createCampaign = createAsyncThunk<Campaign, CreateCampaignRequest, { rejectValue: string }>(
  'campaign/createCampaign',
  async (campaignData, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/campaigns', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer your_jwt_token_here',
        },
        body: JSON.stringify(campaignData),
      });

      if (!response.ok) {
        throw new Error('Failed to create campaign');
      }

      const data: Campaign = await response.json();
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
