import React, { useState, useEffect } from 'react';
import { fetchTop100Influencers, fetchMicroInfluencers } from '../api/influencerApi';

const Search: React.FC = () => {
  const [top100, setTop100] = useState([]);
  const [micro, setMicro] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const top100Data = await fetchTop100Influencers();
        const microData = await fetchMicroInfluencers();
        setTop100(top100Data);
        setMicro(microData);
      } catch (error) {
        console.error('Error fetching influencers:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading influencers...</div>;
  }

  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">Search Influencers</h1>
      <div>
        <h2 className="text-xl font-semibold mb-2">Top 100 Influencers</h2>
        <ul>
          {top100.map((influencer: any, index: number) => (
            <li key={index} className="mb-2">
              {influencer.name} - {influencer.niche} - Followers: {influencer.followers.toLocaleString()}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Micro Influencers</h2>
        <ul>
          {micro.map((influencer: any, index: number) => (
            <li key={index} className="mb-2">
              {influencer.name} - {influencer.niche} - Followers: {influencer.followers.toLocaleString()}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Search;
