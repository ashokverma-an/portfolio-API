const sql = require('mssql');
const config = require('../config/database');
const SubMas = require('../models/subMas');

async function SaveSubject(req, res) {
    const { SubjectTitle,SubjectCode,Isoptional,IsSeprate,IsLab,GroupSubject,ClientCode,BranchCode} = req.body;

    try {
        const result = await SubMas.SaveSubject(SubjectTitle,SubjectCode,Isoptional,IsSeprate,IsLab,GroupSubject,ClientCode,BranchCode);
        if (result) {
            res.json({ IsSuccess: true, message: 'Subject created successfully.', Data: result });
        } else {
            res.status(500).json({ IsSuccess: false, message: 'Failed to save Subject.', Data: [] });
        }
    } catch (err) {
        console.error('Database error:', err);
        res.status(500).json({ IsSuccess: false, message: 'Failed to save Subject.', Data: [] });
    }
}

async function fetchSubject(req, res) {
    try {
        const result = await SubMas.fetchSubject();
        if (result) {
            res.json({ IsSuccess: true, message: 'Subject fetched successfully.', Data: result });
        } else {
            res.status(500).json({ IsSuccess: false, message: 'Failed to fetch Subject.', Data: [] });
        }
    } catch (err) {
        console.error('Database error:', err);
        res.status(500).json({ IsSuccess: false, message: 'Failed to fetch Subject.', Data: [] });
    }
}
async function UpdateSubject(req, res) {
    const {Id, SubjectTitle,SubjectCode,Isoptional,IsSeprate,IsLab,GroupSubject,ClientCode,BranchCode} = req.body;

    try {
        const result = await SubMas.UpdateSubject(Id,SubjectTitle,SubjectCode,Isoptional,IsSeprate,IsLab,GroupSubject,ClientCode,BranchCode);
        if (result) {
            res.json({ IsSuccess: true, message: 'Subject Updated successfully.', Data: result });
        } else {
            res.status(500).json({ IsSuccess: false, message: 'Failed to Update Subject.', Data: [] });
        }
    } catch (err) {
        console.error('Database error:', err);
        res.status(500).json({ IsSuccess: false, message: 'Failed to Update  Subject.', Data: [] });
    }
}

module.exports = {
    SaveSubject,
    fetchSubject,
    UpdateSubject
};

