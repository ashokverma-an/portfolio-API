// models/query.js

const sql = require('mssql');
const config = require('../config/database');

class SubjectMaster {
    async SaveSubject(SubjectTitle,SubjectCode,Isoptional,IsSeprate,IsLab,GroupSubject,ClientCode,BranchCode) {
        try {
            const xmlParameters = `<parameter>
            <SubjectTitle>${SubjectTitle}</SubjectTitle>
            <SubjectCode>${SubjectCode}</SubjectCode>
            <Isoptional>${Isoptional}</Isoptional>
            <IsSeprate>${IsSeprate}</IsSeprate>
            <IsLab>${IsLab}</IsLab>
            <GroupSubject>${GroupSubject}</GroupSubject>
            <ClientCode>${ClientCode}</ClientCode>
            <BranchCode>${BranchCode}</BranchCode>
        </parameter>`;
            const pool = await sql.connect(config);
            const result = await pool.request()
                .input('flag', sql.VarChar(50), 'SAVE_SUBJECT')
                .input('xmlParameters', sql.Xml, xmlParameters)
                .execute('ManageSubject');

            return result.recordsets[0];
        } catch (err) {
            console.error('Database error:', err);
            return null;
        }
    }

    async fetchSubject() {
        try {
            const pool = await sql.connect(config);
            const result = await pool.request()
                .input('flag', sql.VarChar(50), 'FETCH_SUBJECT')
                .execute('ManageSubject');

            return result.recordsets[0];
        } catch (err) {
            console.error('Database error:', err);
            return null;
        }
    }
    async UpdateSubject(Id,SubjectTitle,SubjectCode,Isoptional,IsSeprate,IsLab,GroupSubject,ClientCode,BranchCode) {
        try {
            const xmlParameters = `<parameter>
            <Id>${Id}</Id>
            <SubjectTitle>${SubjectTitle}</SubjectTitle>
            <SubjectCode>${SubjectCode}</SubjectCode>
            <Isoptional>${Isoptional}</Isoptional>
            <IsSeprate>${IsSeprate}</IsSeprate>
            <IsLab>${IsLab}</IsLab>
            <GroupSubject>${GroupSubject}</GroupSubject>
            <ClientCode>${ClientCode}</ClientCode>
            <BranchCode>${BranchCode}</BranchCode>
        </parameter>`;
            const pool = await sql.connect(config);
            const result = await pool.request()
                .input('flag', sql.VarChar(50), 'UPDATE_SUBJECT')
                .input('xmlParameters', sql.Xml, xmlParameters)
                .execute('ManageSubject');

            return result.recordsets[0];
        } catch (err) {
            console.error('Database error:', err);
            return null;
        }
    }
}

module.exports = new SubjectMaster();
