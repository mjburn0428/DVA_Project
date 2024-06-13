const express = require('express');
const router = express.Router();
const { requiresAuth } = require('express-openid-connect');

// Creates the pilots controller needed to edit pilot data
const ivaoController = require('../controllers/ivao');

router.get('/', requiresAuth(), ivaoController.getIvao);
router.get('/:id', requiresAuth(), ivaoController.getoneIvao);
router.post('/', requiresAuth(), ivaoController.createIvaoPilot);
router.put('/:id', requiresAuth(), ivaoController.updateIvaoPilot);
router.delete('/:id', requiresAuth(), ivaoController.deleteIvaoPilot);

module.exports = router;