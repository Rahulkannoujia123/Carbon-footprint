const express = require('express');
const calculateCarbonFootprintController = require('../controller/calculationController');

const router = express.Router();

router.post('/', calculateCarbonFootprintController.calculateCarbonFootprint);

module.exports = router;
