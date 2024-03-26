const express = require('express');
const router = express.Router();
const queryController = require('../controllers/queryController');

router.post('/savequery', queryController.saveQuery);
router.get('/fetchqueries', queryController.fetchQueries);

module.exports = router;
