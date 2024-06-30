const express = require('express');
const app = express();

const videoUrls = [
  "https://i.imgur.com/nhs8YG7.mp4",
  "https://i.imgur.com/d4iHDG4.mp4"
];

app.get('/videos', (req, res) => {
  res.json(videoUrls);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
