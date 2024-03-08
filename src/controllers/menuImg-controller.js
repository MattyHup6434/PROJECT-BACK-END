const db = require("../models/db");

// create
exports.createImgMenu = async (req, res, next) => {
  const { url } = req.body;
  try {
    if (!(url)) {
      throw new Error("Check the information to be correct.");
    }

    const UrlData = {
      url
    };

    // create menu
    const menu = await db.menu_Img.create({ data: UrlData });

    res.json({ menu, msg: "Create menuImg successful" });
  } catch (err) {
    next(err);
  }
};

//update
exports.updateMenuImg = async (req, res, next) => {
  const { url } = req.body;
  const id = req.params.id; 
  try {
    if (!id) {
      throw new Error('Missing ID for update');
    }
    if (!(url)) {
      throw new Error("Check the information to be correct.");
    }

    const menu = await db.menu_Img.findFirst({
      where: {
        id: Number(id)
      }
    });
    
    if (!menu) {
      throw new Error('menu_Img not found');
    }

    const updatedData = {
      url: url || menu_Img.url
    };

    await db.menu_Img.update({
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
exports.getMenuImgById = async (req, res, next) => {
  const { id } = req.params;
  try {
    if (!id) {
      throw new Error('Missing ID for get ');
    }
    const menu = await db.menu_Img.findFirst({
      where: {
        id: Number(id)
      }
    });

    if (!menu) {
      throw new Error('menu_Img not found');
    }

    res.json(menu);
  } catch (err) {
    next(err);
  }
};


//getMenuAll
exports.getMenuImgAll = async (req, res, next) => {
  try {
    const menu = await db.menu_Img.findMany();
    res.json(menu);
  } catch (err) {
    next(err);
  }
};




//del
exports.delMenuImg = async (req, res, next) => {
  const { id } = req.params;
  try {
    if (!id) {
      throw new Error('Missing ID for delete');
    }
    const Menu = await db.menu_Img.delete({
      where: {
        id: Number(id)
      }
    });
    
    if (!Menu) {
      throw new Error('menu_Img not found');
    }

    res.json({ Menu,mes: "deleted " });
  } catch (err) {
    next(err);
  }
};
