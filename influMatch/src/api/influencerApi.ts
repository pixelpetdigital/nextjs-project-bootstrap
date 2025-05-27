import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 5000,
});

export const fetchTop100Influencers = async () => {
  try {
    const response = await apiClient.get('/api/influencers/top100');
    return response.data;
  } catch (error) {
    console.error('Error fetching Top 100 influencers:', error);
    throw error;
  }
};

export const fetchMicroInfluencers = async () => {
  try {
    const response = await apiClient.get('/api/influencers/micro');
    return response.data;
  } catch (error) {
    console.error('Error fetching Micro influencers:', error);
    throw error;
  }
};
