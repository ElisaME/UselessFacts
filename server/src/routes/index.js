const express = require('express');
const router = express.Router();
const { randomFact} = require('../controllers/factsController');

router.get('/randomFact', randomFact);

module.exports = router