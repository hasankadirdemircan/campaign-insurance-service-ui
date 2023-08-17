import { CampaignCategory } from "./campaignCategory";
import { CampaignStatus } from "./campaignStatus";

export interface Campaign {
  id: number;
  campaignTitle: string;
  campaignDetail: string;
  campaignCategory: CampaignCategory;
  campaignStatus: CampaignStatus;
}