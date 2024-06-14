const express = require('express');
const router = express.Router();
const { requiresAuth } = require('express-openid-connect');

// Creates the pilots controller needed to edit pilot data
const peController = require('../controllers/pe');

router.get('/', requiresAuth(), peController.getPE);
router.get('/:id', requiresAuth(), peController.getonePE);
router.post('/', requiresAuth(), peController.createPEPilot);
router.put('/:id', requiresAuth(), peController.updatePEPilot);
router.delete('/:id', requiresAuth(), peController.deletePEPilot);

module.exports = router;