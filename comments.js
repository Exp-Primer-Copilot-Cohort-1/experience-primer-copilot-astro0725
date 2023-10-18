// Create web server

// Import modules
const express = require('express');
const path = require('path');

// Create web server
const app = express();

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Set port
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// Create API
app.get('/api/members', (req, res) => {
    const members = [
        {
            id: 1,
            name: 'John Doe',
            email: '
