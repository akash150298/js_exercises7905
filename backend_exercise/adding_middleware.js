const express = require('express');
const app = express();

// Middleware to log request details
const logMiddleware = (req, res, next) => {
    console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
    next(); // Pass control to the next middleware or route handler
};

// Middleware to simulate authentication
const authMiddleware = (req, res, next) => {
    const isAuthenticated = true; // This would be replaced with actual authentication logic
    if (isAuthenticated) {
        next(); // User is authenticated, pass control to the next middleware or route handler
    } else {
        res.status(401).send('Unauthorized'); // User is not authenticated, send 401 status
    }
};

// Apply middleware to app.get()
app.get('/data', logMiddleware, authMiddleware, (req, res) => {
    res.send('Secure data access');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000'
