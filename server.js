const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse incoming JSON data payloads
app.use(express.json());

// Mock database storage
let users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Doe", email: "jane@example.com" }
];

// 1. GET Route: Fetch all users
app.get('/api/users', (req, res) => {
    res.status(200).json(users);
});

// 2. POST Route: Add a new user
app.post('/api/users', (req, res) => {
    const { name, email } = req.body;

    // Basic data validation
    if (!name || !email) {
        return res.status(400).json({ error: "Name and email are required fields" });
    }

    const newUser = {
        id: users.length + 1,
        name,
        email
    };

    users.push(newUser);
    res.status(201).json({ message: "User created successfully", user: newUser });
});

// Start the server instance
app.listen(PORT, () => {
    console.log(`Server is running smoothly on http://localhost:${PORT}`);
});
