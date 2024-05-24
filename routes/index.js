const express = require('express');
const router = express.Router();


router.use('/pilots', require('./pilots'))


module.exports = router;