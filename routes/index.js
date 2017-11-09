const express = require('express');

const router = express.Router();

// Do work here
router.get('/', (request, response) => { response.render('hello', { title: 'Chottu' }); });

module.exports = router;
