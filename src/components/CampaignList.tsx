// src/components/CampaignList.tsx

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampaigns } from '../api/campaignApi';
import { AppDispatch } from '../app/store'; 
import { RootState }  from "../app/types"
import { Button, Container, Table } from 'react-bootstrap';

const CampaignList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  
  const campaigns = useSelector((state: RootState) => state.campaign.campaigns);
  
  useEffect(() => {
    dispatch(fetchCampaigns());
  }, [dispatch]);

  return (
    <Container className='mt-4'>
    <Table  hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Detail</th>
          <th>Category</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {campaigns.map((item, index) => {
          const campaign = item.campaign;
          return (
            <tr key={campaign.id}>
              <td>{index + 1}</td>
              <td>{campaign.campaignTitle}</td>
              <td>{campaign.campaignDetail}</td>
              <td>{campaign.campaignCategory}</td>
              <td>{campaign.campaignStatus}</td>
              <td>
                <Button variant='outline-danger' size='sm'> DELETE </Button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  </Container>

  );
};

export default CampaignList;
