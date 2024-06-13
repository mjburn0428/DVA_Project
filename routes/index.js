const express = require('express');
const router = express.Router();

//pilots route
router.use('/pilots', require('./pilots'))

//ivao pilots route
router.use('/ivao', require('./ivao'))

//swagger route
router.use('/', require('./swagger'));

module.exports = router;