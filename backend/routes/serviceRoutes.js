const express = require('express');
const router = express.Router();
const serviceController = require("../controller/serviceController");

router.get('/',serviceController.displayServices);
router.post('/',serviceController.addServices);
router.put('/:id', serviceController.updateService);
router.delete('/:id',serviceController.deleteService);

module.exports = router;