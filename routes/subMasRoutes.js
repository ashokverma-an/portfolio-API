const express = require('express');
const router = express.Router();
const SubjectMaster = require('../controllers/SubjectMaster');

router.post('/savesubject', SubjectMaster.SaveSubject);
router.get('/fetchsubject', SubjectMaster.fetchSubject);
router.post('/updatesubject', SubjectMaster.UpdateSubject);

module.exports = router;