export enum CampaignCategory {
    TSS = 'TSS',
    OSS = 'OSS',
    HAYAT_INSURANCE = 'HAYAT_INSURANCE',
    OTHER = 'OTHER',
  }
  
  export enum CampaignStatus {
    PENDING = 'PENDING',
    ACTIVE = 'ACTIVE',
    COMPLETED = 'COMPLETED',
  }
  
  export interface Campaign {
    id: number;
    campaignTitle: string;
    campaignDetail: string;
    campaignCategory: CampaignCategory;
    campaignStatus: CampaignStatus;
  }
  
  export interface CreateCampaignRequest {
    campaignTitle: string;
    campaignDetail: string;
    campaignCategory: CampaignCategory;
  }
  