const express = require("express");
const router = express.Router();
const restaurantController = require("../controllers/restaurant-controler");
const menuController = require("../controllers/menu-controller");



// Restaurant
router.get("/getRestaurant/:id", restaurantController.getRestaurantById);
router.get("/getRestaurant", restaurantController.getRestaurantAll);


// Menu
router.get("/getMenu", menuController.getMenuAll);
router.get("/getMenuById/:id", menuController.getMenuById);


module.exports = router