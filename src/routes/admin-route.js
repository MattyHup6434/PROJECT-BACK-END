const express = require("express");
const router = express.Router();
const restaurantController = require("../controllers/restaurant-controler");
const adminMiddleware = require('../middlewares/admin'); 
const menuController = require("../controllers/menu-controller");
const menuImgController = require("../controllers/menuImg-controller");
const authController = require('../controllers/auth-controller')

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
router.get("/getRestaurant", restaurantController.getRestaurantAll);
router.delete("/delRestaurant/:id", restaurantController.delRestaurant);

// Menu
router.post("/createMenu", menuController.createMenu);
router.get("/getMenu", menuController.getMenuAll);
router.put("/updateMenu/:id", menuController.updateMenu);
router.get("/getMenuById/:id", menuController.getMenuById);
router.delete("/delMenu/:id", menuController.delMenu);

// MenuImg
router.post("/createImgMenu", menuImgController.createImgMenu);
router.get("/getMenuImg", menuImgController.getMenuImgAll);
router.put("/updateMenuImg/:id", menuImgController.updateMenuImg);
router.get("/getMenuImgBy/:id", menuImgController.getMenuImgById);
router.delete("/delMenuImg/:id", menuImgController.delMenuImg);

//USER
router.get('/getUser', authController.getAllUsers)
router.get('/getUser/:id', authController.getUser)

module.exports = router;
