
const express = require('express');
const app = express();

const videoUrls = [
  "https://i.imgur.com/IO1ylzD.mp4",
  "https://i.imgur.com/31ZhjGi.mp4",
  "https://i.imgur.com/YADNv1J.mp4" ,
  "https://i.imgur.com/vNM1tlp.mp4" ,
  "https://i.imgur.com/CQN5MUV.mp4" ,
  "https://i.imgur.com/GRXMtMC.mp4"
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
