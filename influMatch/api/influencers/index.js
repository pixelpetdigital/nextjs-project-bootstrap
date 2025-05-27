const express = require('express');
const app = express();
const port = 5000;

const top100Influencers = [
  {
    name: "Juan Perez",
    handle: "juanperez",
    photo: "https://randomuser.me/api/portraits/men/1.jpg",
    followers: 1500000,
    engagement: 4.5,
    niche: "Fashion",
    location: "Bogotá",
    matchScore: 95,
    verified: true
  }
  // Add more sample influencer objects here
];

const microInfluencers = [
  {
    name: "Maria Gomez",
    handle: "mariagomez",
    photo: "https://randomuser.me/api/portraits/women/2.jpg",
    followers: 12000,
    engagement: 5.2,
    niche: "Beauty",
    location: "Medellín",
    matchScore: 88,
    verified: false
  }
  // Add more sample micro-influencer objects here
];

app.get('/api/influencers/top100', (req, res) => {
  res.json(top100Influencers);
});

app.get('/api/influencers/micro', (req, res) => {
  res.json(microInfluencers);
});

app.listen(port, () => {
  console.log(`InfluMatch API stub listening at http://localhost:${port}`);
});
