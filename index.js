// index.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// An API route example
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from the server!' });
});

// Serve React app for any other route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,  'build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
