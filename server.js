const express = require('express');
const app = express();

app.use(express.json());

// API routes
app.get('/api/data', (req, res) => {
// Return data
});

// Serve React app
app.use(express.static('public'));
app.get('*', (req, res) => {
res.sendFile('index.html', { root: 'public' });
});

const port = 3001;
app.listen(port, () => {
console.log(`Server listening on port ${port}`);
});