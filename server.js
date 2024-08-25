const express = require('express');
const app = express();
app.use(express.json());

// POST method endpoint
app.post('/bfhl', (req, res) => {
    const { data } = req.body;
    const numbers = [];
    const alphabets = [];
    let highestLowercase = '';

    // Sort data into numbers and alphabets
    data.forEach(item => {
        if (!isNaN(item)) {
            numbers.push(item);
        } else {
            alphabets.push(item);
            if (item === item.toLowerCase() && item > highestLowercase) {
                highestLowercase = item;
            }
        }
    });

    // Send the response
    res.json({
        "is_success": true,
        "user_id": "ayushisingh3321",
        "email": "ayushisingh3321@gmail.com",
        "roll_number": "21BAI10088",
        "numbers": numbers,
        "alphabets": alphabets,
        "highest_lowercase_alphabet": highestLowercase ? [highestLowercase] : []
    });
});

// GET method endpoint
app.get('/bfhl', (req, res) => {
    res.status(200).json({
        "operation_code": 1
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
