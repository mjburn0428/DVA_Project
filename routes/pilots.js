const express = require('express');
const router = express.Router();
const { requiresAuth } = require('express-openid-connect');

// Creates the pilots controller needed to edit pilot data
const pilotsController = require('../controllers/pilots');

router.get('/', requiresAuth(), pilotsController.getAll);
router.get('/:id', requiresAuth(), pilotsController.getSingle);
router.post('/', requiresAuth(), pilotsController.createPilot);
router.put('/:id', requiresAuth(), pilotsController.updatePilot);
router.delete('/:id', requiresAuth(), pilotsController.deletePilot);

module.exports = router;