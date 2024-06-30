const express = require('express');
const app = express();

const videoUrls = [
  "https://i.imgur.com/nhs8YG7.mp4",
  "https://i.imgur.com/d4iHDG4.mp4"
];

// Middleware for welcome message on root URL
app.use('/', (req, res, next) => {
  res.send("Welcome! Visit /videos to see the available videos.");
});

// Modified /videos endpoint
app.get('/videos', (req, res) => {
  const numVideos = videoUrls.length;
  const response = {
    message: `There are ${numVideos} videos available.`,
    videoUrls: videoUrls 
  };
  res.json(response); 
});

// Error handling for invalid URLs
app.use((req, res) => {
  res.status(404).send("Invalid URL. Please check the address.");
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
