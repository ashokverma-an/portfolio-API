// models/query.js

const sql = require('mssql');
const config = require('../config/database');

class Query {
    async save(name, email, message) {
        try {
            const pool = await sql.connect(config);
            const result = await pool.request()
                .input('flag', sql.VarChar(50), 'SAVE_QUERY')
                .input('name', sql.VarChar(255), name)
                .input('email', sql.VarChar(255), email)
                .input('message', sql.Text, message)
                .execute('ManageUser');

            return result.recordsets[0];
        } catch (err) {
            console.error('Database error:', err);
            return null;
        }
    }

    async fetch() {
        try {
            const pool = await sql.connect(config);
            const result = await pool.request()
                .input('flag', sql.VarChar(50), 'FETCH_QUERIES')
                .execute('ManageUser');

            return result.recordsets[0];
        } catch (err) {
            console.error('Database error:', err);
            return null;
        }
    }
}

module.exports = new Query();
