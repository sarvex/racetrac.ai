const express = require('express');

const router = express.Router();

// Do work here
router.get('/', (request, response) => { response.send('Hey! It works!'); });

module.exports = router;
