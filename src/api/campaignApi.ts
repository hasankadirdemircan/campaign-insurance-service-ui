
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCampaigns = createAsyncThunk('campaigns/fetchCampaigns', async () => {
  const response = await fetch('http://localhost:8080/v1/insurance/campaigns', {
    headers: {
      'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiZW1haWwiOiJkZW1pcmNhbmhhc2Fua2FkaXJAZ21haWwuY29tIiwiaWF0IjoxNTE2MjM5MDIyfQ.gj0OOwdIFtyS3L32NQ2hSGP1c6MqZLFZbk8isg3tqpM',
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
});
