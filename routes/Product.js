const express = require("express");
const productController = require("../Controllers/productController");
const router = express.Router();

router.post("/create", productController.create);

router.get("/", productController.findAll);

router.delete("/:id", productController.destroy);

router.patch("/:id", productController.update);

module.exports = router;
