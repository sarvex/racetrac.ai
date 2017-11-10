const express = require('express');
const aboutController = require('../controllers/aboutController');

const router = express.Router();

// Do work here
router.get('/', aboutController.homePage);

module.exports = router;
