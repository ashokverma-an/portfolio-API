// models/user.js

const sql = require('mssql');
const config = require('../config/database');

class UserReg {
    async Userregister(role, name, email,phone,address,profilePicture,department,jobTitle) {
        try {
            const xmlParameters = `<parameter>
            <Role>${role}</Role>
            <Name>${name}</Name>
            <Email>${email}</Email>
            <Phone>${phone}</Phone>
            <Address>${address}</Address>
            <ProfilePicture>${profilePicture}</ProfilePicture>
            <Department>${department}</Department>
            <JobTitle>${jobTitle}</JobTitle>
            <Flag>Insert</Flag>
        </parameter>`;
            const pool = await sql.connect(config);
            const result = await pool.request()
                .input('flag', sql.VarChar(50), 'Insert')
                .input('xmlParameters', sql.Xml, xmlParameters)
                .execute('InsertTechnomadsLogin');

            return result.recordsets[0];
        } catch (err) {
            console.error('Database error:', err);
            return null;
        }
    }
    async fetchLogins() {
        try {
            const pool = await sql.connect(config);
            const result = await pool.request()
                .input('flag', sql.VarChar(50), 'FetchLogin')
                .execute('InsertTechnomadsLogin');

            return result.recordsets[0];
        } catch (err) {
            console.error('Database error:', err);
            return null;
        }
    }
    async UpdateRegistration(Id,role, name, email,phone,address,profilePicture,department,jobTitle) {
        try {
            const xmlParameters = `<parameter>
            <Id>${Id}</Id>
            <Role>${role}</Role>
            <Name>${name}</Name>
            <Email>${email}</Email>
            <Phone>${phone}</Phone>
            <Address>${address}</Address>
            <ProfilePicture>${profilePicture}</ProfilePicture>
            <Department>${department}</Department>
            <JobTitle>${jobTitle}</JobTitle>
        </parameter>`;
            const pool = await sql.connect(config);
            const result = await pool.request()
                .input('flag', sql.VarChar(50), 'Update')
                .input('xmlParameters', sql.Xml, xmlParameters)
                .execute('InsertTechnomadsLogin');

            return result.recordsets[0];
        } catch (err) {
            console.error('Database error:', err);
            return null;
        }
    }
   
}

module.exports = new UserReg();
