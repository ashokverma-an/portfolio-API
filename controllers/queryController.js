const sql = require('mssql');
const config = require('../config/database');
// controllers/queryController.js

const Query = require('../models/query');

async function saveQuery(req, res) {
    const { name, email, message } = req.body;

    try {
        const result = await Query.save(name, email, message);
        if (result) {
            res.json({ IsSuccess: true, message: 'Query saved successfully.', Data: result });
        } else {
            res.status(500).json({ IsSuccess: false, message: 'Failed to save query.', Data: [] });
        }
    } catch (err) {
        console.error('Database error:', err);
        res.status(500).json({ IsSuccess: false, message: 'Failed to save query.', Data: [] });
    }
}

async function fetchQueries(req, res) {
    try {
        const result = await Query.fetch();
        if (result) {
            res.json({ IsSuccess: true, message: 'Queries fetched successfully.', Data: result });
        } else {
            res.status(500).json({ IsSuccess: false, message: 'Failed to fetch queries.', Data: [] });
        }
    } catch (err) {
        console.error('Database error:', err);
        res.status(500).json({ IsSuccess: false, message: 'Failed to fetch queries.', Data: [] });
    }
}

module.exports = {
    saveQuery,
    fetchQueries
};

