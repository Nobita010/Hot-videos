const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Video URLs
const videoUrls = [
  'https://i.imgur.com/FZujE0A.mp4',
  'https://i.imgur.com/JlL0UQQ.mp4'
];

// Serve static files (HTML, CSS, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint to get the video list
app.get('/video-list', (req, res) => {
  res.json(videoUrls); 
});

// API endpoint to get a random video URL (same as before)
app.get('/video', (req, res) => {
  const randomIndex = Math.floor(Math.random() * videoUrls.length);
  const videoUrl = videoUrls[randomIndex];
  res.redirect(videoUrl); 
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
