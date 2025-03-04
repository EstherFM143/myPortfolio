const express = require('express');
const path = require('path');

const app = express();

// Set the directory for static files
app.use(express.static(path.join(__dirname, 'templates')));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates', 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates', 'about.html'));
});

app.get('/skills', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates', 'skills.html'));
});

app.get('/qualification', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates', 'qualification.html'));
});

app.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates', 'projects.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates', 'contact.html'));
});

app.post('/contact', (req, res) => {
    // handling the form submission, e.g., send an email
    res.redirect('/contact');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});