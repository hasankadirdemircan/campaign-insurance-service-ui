// app/store/types.ts

import { CampaignState } from '../features/campaign/campaignSlice';
// Diğer state tiplerini buraya ekleyin

// Tüm reducer state tiplerini birleştirin
export interface RootState {
  campaign: CampaignState;
  // Diğer state tiplerini buraya ekleyin
}
