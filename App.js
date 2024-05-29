const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Route that returns a 404 error
app.get('/not-found', (req, res) => {
    res.status(404).json({
        statusCode: 404,
        message: "This page does not exist"
    });
});

// Route that returns a 402 error
app.post('/payment-required', (req, res) => {
    res.status(402).json({
        statusCode: 402,
        message: "Payment required to access this resource"
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${3000}`);
});
