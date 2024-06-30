const express = require('express');
const app = express();

const videoUrls = [
  "https://i.imgur.com/nhs8YG7.mp4",
  "https://i.imgur.com/d4iHDG4.mp4"
];

app.get('/videos', (req, res) => {
  // 1. Get a Random Video URL
  const randomIndex = Math.floor(Math.random() * videoUrls.length);
  const randomUrl = videoUrls[randomIndex];

  // 2. Create Response Object
  const response = {
    data: randomUrl,
    count: videoUrls.length 
  };

  res.json(response);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
