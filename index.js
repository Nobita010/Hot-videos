const express = require('express');
const app = express();
const fs = require('fs');
const axios = require('axios'); // Import axios if not already done

const videoUrlsFilePath = 'video_urls.txt';

app.get('/videos', (req, res) => {
    fs.readFile(videoUrlsFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }

        const videoUrls = data.split('\n').filter(url => url.trim() !== '');

        // Check if the request is from your bot
        const isBotRequest = req.headers['user-agent'] && req.headers['user-agent'].includes('axios');

        if (isBotRequest) {
            // Fetch a random video URL and send it directly to the bot
            const randomUrl = videoUrls[Math.floor(Math.random() * videoUrls.length)];
            axios.get(randomUrl, { responseType: 'stream' })
                .then(videoStream => {
                    res.writeHead(200, {
                        'Content-Type': 'video/mp4', // Assuming MP4 format
                        'Content-Disposition': 'attachment; filename="video.mp4"'
                    });
                    videoStream.data.pipe(res);
                })
                .catch(error => {
                    console.error("Error fetching video:", error);
                    res.status(500).json({ error: 'Internal Server Error' });
                });
        } else {
            // For other requests, send only the video count
            const videoInfo = {
                count: videoUrls.length,
                type: "video"
            };
            res.json(videoInfo);
        }
    });
});

// ... rest of your server code
