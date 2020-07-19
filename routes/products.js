const express = require('express');
const router = express.Router()

const productsController = require('../controllers/products');

router.get("/products", productsController.list);
router.get("/products/:productId", productsController.show);
router.post("/products", productsController.create);

module.exports = router;