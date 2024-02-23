const db = require("../models/db");

exports.createRestaurant = async (req, res, next) => {
  const { name, address, phone, type } = req.body;
  try {
    // ตรวจสอบความถูกต้องของข้อมูล
    if (!(name && address && phone && type)) {
      return next(new Error("กรุณากรอกข้อมูลให้ครบทุกช่อง"));
    }

    const restaurantData = {
      name,
      address,
      phone,
      type
    };

    
    const newRestaurant = await db.Restaurant.create({ data: restaurantData });


    res.status(201).json(newRestaurant);
  } catch (error) {

    next(error);
  }
};
