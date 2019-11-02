const express = require('express');
const router = express.Router();
const {getFacts, randomFact} = require('../controllers/factsController');

router.get('/', getFacts);
router.get('/randomFact', randomFact);

module.exports = router