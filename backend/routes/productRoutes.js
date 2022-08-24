const express = require('express');
const router = express.Router()
const productController = require('../controller/productController');
const upload = require('../upload')

router.post('/add',upload.single('prodImage'),productController.addProduct);
router.get('/get',productController.displayProducts);
router.put('/update/:id',upload.single('prodImage'),productController.updateProducts);
router.delete('/delete/:id',productController.deleteProducts);

module.exports = router