const express = require('express');
const router = express.Router();
const blogController = require('../controller/blogController');

router.get('/',blogController.displayBlog);
router.get('/:id',blogController.displaySelectedBlog);
router.post('/',blogController.addBlog);
router.put("/:id",blogController.updateBlog);
router.delete("/:id",blogController.deleteBlog);
module.exports =router;