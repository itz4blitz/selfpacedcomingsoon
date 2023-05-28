const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const app = express();
require('dotenv').config();

// Serve static files from the current directory
app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/subscribe', (req, res) => {
    // Your subscription logic here
});

// Serve index.html for root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const port = process.env.PORT || 3333;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
