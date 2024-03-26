// models/user.js

const sql = require('mssql');
const config = require('../config/database');

class User {
    async register(name, email, password) {
        try {
            const pool = await sql.connect(config);
            const result = await pool.request()
                .input('flag', sql.VarChar(50), 'REGISTER_USER')
                .input('name', sql.VarChar(255), name)
                .input('email', sql.VarChar(255), email)
                .input('password', sql.VarChar(255), password)
                .execute('ManageUser');

            return result.recordsets[0];
        } catch (err) {
            console.error('Database error:', err);
            return null;
        }
    }

    async login(username, password) {
        try {
            const pool = await sql.connect(config);
            const result = await pool.request()
                .input('flag', sql.VarChar(50), 'LOGIN_USER')
                .input('username', sql.VarChar(255), username)
                .input('password', sql.VarChar(255), password)
                .execute('ManageUser');

            return result.recordsets[0];
        } catch (err) {
            console.error('Database error:', err);
            return null;
        }
    }
}

module.exports = new User();
