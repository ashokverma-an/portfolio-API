const sql = require('mssql');
const config = require('../config/database');
const userReg = require('../models/userReg');
async function userRegister(req, res) {
    const { role, name, email,phone,address,profilePicture,department,jobTitle} = req.body;

    try {
        const result = await userReg.Userregister(role, name, email,phone,address,profilePicture,department,jobTitle);
        if (result) {
            res.json({ IsSuccess: true, message: 'User Created successfully credential sent to your gmail Address.', Data: result });
        } else {
            res.status(500).json({ IsSuccess: false, message: 'Failed to create Account.', Data: [] });
        }
    } catch (err) {
        console.error('Database error:', err);
        res.status(500).json({ IsSuccess: false, message: 'Failed to Create  Account.', Data: [] });
    }
}
async function fetchLogins(req, res) {
    try {
        const result = await userReg.fetchLogins();
        if (result) {
            res.json({ IsSuccess: true, message: 'Logins fetched successfully.', Data: result });
        } else {
            res.status(500).json({ IsSuccess: false, message: 'Failed to fetch Login.', Data: [] });
        }
    } catch (err) {
        console.error('Database error:', err);
        res.status(500).json({ IsSuccess: false, message: 'Failed to fetch Login.', Data: [] });
    }
}
async function UpdateLogins(req, res) {
    const {Id, role, name, email,phone,address,profilePicture,department,jobTitle} = req.body;

    try {
        const result = await userReg.UpdateRegistration(Id,role, name, email,phone,address,profilePicture,department,jobTitle);
        if (result) {
            res.json({ IsSuccess: true, message: 'User Account Updated successfully.', Data: result });
        } else {
            res.status(500).json({ IsSuccess: false, message: 'Failed to Update Account.', Data: [] });
        }
    } catch (err) {
        console.error('Database error:', err);
        res.status(500).json({ IsSuccess: false, message: 'Failed to Update  Account. 11', Data: [] });
    }
}
module.exports = {
    userRegister,fetchLogins,UpdateLogins
};
