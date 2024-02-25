const db = require("../models/db");
//create
exports.createRestaurant = async (req, res, next) => {
  const { name, address, phone, type } = req.body;
  try {
    
    if (!(name && address && phone && type)) {
      throw new Error('Check the information to be correct.')
    }

    const restaurantData = {
      name,
      address,
      phone,
      type
    };

    const newRestaurant = await db.Restaurant.create({ data: restaurantData });
    console.log(newRestaurant)
    res.json({ msg: 'restaurant successful' })
  } catch (err) {

    next(err);
  }
};
//update
exports.updateRestaurant = async (req, res, next) => {
  const {  name, address, phone, type } = req.body;
  const id = req.params.id; 
  try {
    if (!id) {
      throw new Error('Missing ID for update');
    }
    if (!(name && address && phone && type)) {
      throw new Error('Check the information to be correct.')
    }

    const restaurant = await db.restaurant.findFirst({
      where: {
        id: Number(id)
      }
    });
    
    if (!restaurant) {
      throw new Error('Restaurant not found');
    }

    const updatedData = {
      name: name || restaurant.name,
      address: address || restaurant.address,
      phone: phone || restaurant.phone,
      type: type || restaurant.type
    };

    await db.restaurant.update({
      where: {
        id: Number(id)
      },
      data: updatedData
    });

    res.json({updatedData, msg: 'update Restaurant successful' });
  } catch (err) {
    next(err);
  }
};

//getById
exports.getRestaurantById = async (req, res, next) => {
  const { id } = req.params;
  try {
    if (!id) {
      throw new Error('Missing ID for get ');
    }
    const restaurant = await db.restaurant.findFirst({
      where: {
        id: Number(id)
      }
    });

    if (!restaurant) {
      throw new Error('Restaurant not found');
    }

    res.json(restaurant);
  } catch (err) {
    next(err);
  }
};

//getAll
exports.getRestaurantAll = async (req, res, next) => {
  try {
    const restaurants = await db.Restaurant.findMany();
    res.json(restaurants);
  } catch (err) {
    next(err);
  }
};


//del
exports.delRestaurant = async (req, res, next) => {
  const { id } = req.params;
  try {
    if (!id) {
      throw new Error('Missing ID for delete');
    }
    const restaurant = await db.restaurant.delete({
      where: {
        id: Number(id)
      }
    });
    
    if (!restaurant) {
      throw new Error('Restaurant not found');
    }

    res.json({ restaurant,mes: "deleted " });
  } catch (err) {
    next(err);
  }
};