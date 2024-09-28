const express = require('express');
const router = express.Router();

const testController = require('../controllers/test.controller');

router.post('/fillData', testController.fillData);

module.exports = router;