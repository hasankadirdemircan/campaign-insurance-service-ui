import { CampaignCategory } from "./campaignCategory";

export interface CreateCampaignRequest {
    id: number;
    campaignTitle: string;
    campaignDetail: string;
    campaignCategory: CampaignCategory;
}