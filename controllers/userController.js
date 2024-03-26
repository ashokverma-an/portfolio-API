const sql = require('mssql');
const config = require('../config/database');

const User = require('../models/user');

async function register(req, res) {
    const { name, email, password } = req.body;

    try {
        const result = await User.register(name, email, password);
        if (result) {
            res.json({ IsSuccess: true, message: 'Registration successful.', Data: result });
        } else {
            res.status(500).json({ IsSuccess: false, message: 'Registration failed.', Data: [] });
        }
    } catch (err) {
        console.error('Database error:', err);
        res.status(500).json({ IsSuccess: false, message: 'Registration failed.', Data: [] });
    }
}

async function login(req, res) {
    const { username, password } = req.body;

    try {
        const result = await User.login(username, password);
        if (result) {
            res.json({ IsSuccess: true, message: 'Login successful.', Data: result });
        } else {
            res.status(500).json({ IsSuccess: false, message: 'Login failed.', Data: [] });
        }
    } catch (err) {
        console.error('Database error:', err);
        res.status(500).json({ IsSuccess: false, message: 'Login failed.', Data: [] });
    }
}

module.exports = {
    register,
    login
};


