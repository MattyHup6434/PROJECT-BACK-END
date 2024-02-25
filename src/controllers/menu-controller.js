const db = require("../models/db");

// create
exports.createMenu = async (req, res, next) => {
  const { name, price, categoryId, restaurantId, menuImgId } = req.body;
  try {
    if (!(name && price && categoryId && restaurantId && menuImgId)) {
      throw new Error("Check the information to be correct.");
    }

    const MenuData = {
      name,
      price,
      categoryId,
      restaurantId,
      menuImgId,
    };

    // create menu
    const menu = await db.menu.create({ data: MenuData });

    res.json({ menu, msg: "Create menu successful" });
  } catch (err) {
    next(err);
  }
};

//update
exports.updateMenu = async (req, res, next) => {
  const { name, price, categoryId, restaurantId, menuImgId } = req.body;
  const id = req.params.id; 
  try {
    if (!id) {
      throw new Error('Missing ID for update');
    }
    if (!(name && price && categoryId && restaurantId && menuImgId)) {
      throw new Error("Check the information to be correct.");
    }

    const menu = await db.menu.findFirst({
      where: {
        id: Number(id)
      }
    });
    
    if (!menu) {
      throw new Error('menu not found');
    }

    const updatedData = {
      name: name || menu.name,
      price: price || menu.price,
      categoryId: categoryId || menu.categoryId,
      restaurantId: restaurantId || menu.restaurantId,
      menuImgId:menuImgId ||menu.menuImgId
    };

    await db.menu.update({
      where: {
        id: Number(id)
      },
      data: updatedData
    });

    res.json({updatedData, msg: 'update menu successful' });
  } catch (err) {
    next(err);
  }
};

//getById
exports.getMenuById = async (req, res, next) => {
  const { id } = req.params;
  try {
    if (!id) {
      throw new Error('Missing ID for get ');
    }
    const menu = await db.menu.findFirst({
      where: {
        id: Number(id)
      }
    });

    if (!menu) {
      throw new Error('menu not found');
    }

    res.json(menu);
  } catch (err) {
    next(err);
  }
};


//getMenuAll
exports.getMenuAll = async (req, res, next) => {
  try {
    const Menu = await db.menu.findMany({
      include: {
        category: true,
        restaurant: true,
        menuImg: true,
      },
    });
    res.json(Menu);
  } catch (err) {
    next(err);
  }
};
//del
exports.delMenu = async (req, res, next) => {
  const { id } = req.params;
  try {
    if (!id) {
      throw new Error('Missing ID for delete');
    }
    const Menu = await db.menu.delete({
      where: {
        id: Number(id)
      }
    });
    
    if (!Menu) {
      throw new Error('Menu not found');
    }

    res.json({ Menu,mes: "deleted " });
  } catch (err) {
    next(err);
  }
};
