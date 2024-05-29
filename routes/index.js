const express = require('express');
const router = express.Router();

//pilots route
router.use('/pilots', require('./pilots'))

//swagger route
router.use('/', require('./swagger'));

module.exports = router;