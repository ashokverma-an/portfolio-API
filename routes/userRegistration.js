const express = require('express');
const router = express.Router();
const userRegistration = require('../controllers/userRegistration');
router.post('/userRegistration', userRegistration.userRegister);
router.get('/FetchLogin', userRegistration.fetchLogins);
router.post('/UpdateLogins', userRegistration.UpdateLogins);
module.exports = router;
