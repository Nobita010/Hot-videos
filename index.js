const express = require('express');
const app = express();
const fs = require('fs');

const videoUrlsFilePath = 'video_urls.txt';

app.get('/videos', (req, res) => {
    fs.readFile(videoUrlsFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }

        const videoUrls = data.split('\n').filter(url => url.trim() !== '');

        const videoInfo = {
            count: videoUrls.length,
            type: "video"
        };
        res.json(videoInfo);
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
