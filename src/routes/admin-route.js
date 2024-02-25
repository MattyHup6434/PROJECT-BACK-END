const express = require("express");
const router = express.Router();
const restaurantController = require("../controllers/restaurant-controler");
const adminMiddleware = require('../middlewares/admin'); 
const menuController = require("../controllers/menu-controller");

// router.post(
//   "/product",
//   upload.array("images", 5),
//   adminController.createProduct
// );
// router.post("/product/:productId", adminController.updateProduct);

// router.post("/category", adminController.createCategory);
router.use(adminMiddleware);

// Restaurant
router.post("/createRestaurant", restaurantController.createRestaurant);
router.put("/updateRestaurant/:id", restaurantController.updateRestaurant);
router.get("/getRestaurant/:id", restaurantController.getRestaurantById);
router.get("/getRestaurantAll", restaurantController.getRestaurantAll);
router.delete("/delRestaurant/:id", restaurantController.delRestaurant);

// Menu
router.post("/createMenu", menuController.createMenu);
router.get("/getMenuAll", menuController.getMenuAll);
router.put("/updateMenu/:id", menuController.updateMenu);
router.get("/getMenuById/:id", menuController.getMenuById);
router.delete("/delMenu/:id", menuController.delMenu);


module.exports = router;
