// src/components/CampaignList.tsx

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampaigns } from '../api/campaignApi'
import { AppDispatch, RootState } from '../app/store';

const CampaignList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const campaigns = useSelector((state: RootState) => state.campaigns.campaigns);

  useEffect(() => {
    dispatch(fetchCampaigns());
  }, [dispatch]);

  return (
    <div>
    <h1>Campaign List</h1>
    <ul>
      {campaigns.map((item) => {
        const campaign = item.campaign;
        return (
          <li key={campaign.id}>
            <h2>{campaign.campaignTitle}</h2>
            <p>{campaign.campaignDetail}</p>
            <p>Category: {campaign.campaignCategory}</p>
            <p>Status: {campaign.campaignStatus}</p>
          </li>
        );
      })}
    </ul>
  </div>
  );
};

export default CampaignList;
