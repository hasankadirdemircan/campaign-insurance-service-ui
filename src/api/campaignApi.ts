
import { createAsyncThunk } from '@reduxjs/toolkit';
import { CreateCampaignRequest } from '../features/campaign/models/createCampaignRequest';

export const fetchCampaigns = createAsyncThunk('campaigns/fetchCampaigns', async (_, thunkAPI) => {
  try {
    const response = await fetch('http://localhost:8080/v1/insurance/campaigns', {
      headers: {
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiZW1haWwiOiJkZW1pcmNhbmhhc2Fua2FkaXJAZ21haWwuY29tIiwiaWF0IjoxNTE2MjM5MDIyfQ.gj0OOwdIFtyS3L32NQ2hSGP1c6MqZLFZbk8isg3tqpM',
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      const errorMessage = await response.text();
      return thunkAPI.rejectWithValue(errorMessage); // Hata mesajını action.payload içine eklenir.
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue('An error occurred'); // Genel hata mesajı
  }
});


export const deleteCampaign = createAsyncThunk('campaigns/deleteCampaign', async (campaignId: number, thunkAPI) => {
  try {
    const response = await fetch(`http://localhost:8080/v1/insurance/campaigns/${campaignId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiZW1haWwiOiJkZW1pcmNhbmhhc2Fua2FkaXJAZ21haWwuY29tIiwiaWF0IjoxNTE2MjM5MDIyfQ.gj0OOwdIFtyS3L32NQ2hSGP1c6MqZLFZbk8isg3tqpM',
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      // İstek başarılı bir şekilde tamamlandı.
      return null;
    } else {
      const errorMessage = await response.text();
      return thunkAPI.rejectWithValue(errorMessage);
    }
  } catch (error) {
    return thunkAPI.rejectWithValue('An error occurred');
  }
});

export const createCampaign = createAsyncThunk('campaigns/createCampaign', async (campaign: CreateCampaignRequest, thunkAPI) => {
  try {
    const response = await fetch(`http://localhost:8080/v1/insurance/campaigns`, {
      method: 'POST',
      headers: {
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiZW1haWwiOiJkZW1pcmNhbmhhc2Fua2FkaXJAZ21haWwuY29tIiwiaWF0IjoxNTE2MjM5MDIyfQ.gj0OOwdIFtyS3L32NQ2hSGP1c6MqZLFZbk8isg3tqpM',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(campaign)
    });
    if (response.ok) {
      const campaignData = await response.json(); // İsteğin yanıtını JSON olarak al
      console.log(campaignData)
      return campaignData; // Kampanya verisini döndür, bunu slice içerisnde push etmek için kullanıyoruz.
    } else {
      const errorMessage = await response.text();
      return thunkAPI.rejectWithValue(errorMessage);
    }
  } catch (error) {
    return thunkAPI.rejectWithValue('An error occurred');
  }
});
