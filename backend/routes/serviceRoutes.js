const express = require('express');
const router = express.Router();
const serviceController = require("../controller/serviceController");
const upload = require('../upload')

router.get('/',serviceController.displayServices);
router.post('/',upload.single("serviceImage"),serviceController.addServices);
router.put('/:id', serviceController.updateService);
router.delete('/:id',serviceController.deleteService);

module.exports = router;