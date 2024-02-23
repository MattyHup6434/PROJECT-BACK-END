const express = require("express");
const adminController = require("../controllers/admin-controler");
const router = express.Router();
// router.post(
//   "/product",
//   upload.array("images", 5),
//   adminController.createProduct
// );
// router.post("/product/:productId", adminController.updateProduct);

// router.post("/category", adminController.createCategory);

// router.post("/brand", adminController.createBrand);

router.post("/restaurant", adminController.createRestaurant);

module.exports = router;
