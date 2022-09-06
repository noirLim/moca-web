const express = require('express');
const router = express.Router();
const blogController = require('../controller/blogController');
const upload = require('../upload')

router.get('/',blogController.displayBlog);
router.get('/:id',blogController.displaySelectedBlog);
router.post('/',upload.single('image'),blogController.addBlog);
router.put("/:id",blogController.updateBlog);
router.delete("/:id",blogController.deleteBlog);
module.exports =router;