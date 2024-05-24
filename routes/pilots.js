const express = require('express');
const router = express.Router();

//Creates the pilots controller needed to edit pilot data
const pilotsController = require('../controllers/pilots');


router.get('/', pilotsController.getAll);

router.get('/:id', pilotsController.getSingle);

router.post('/', pilotsController.createPilot);

router.put('/:id', pilotsController.updatePilot);

router.delete('/:id', pilotsController.deletePilot);

module.exports = router;
