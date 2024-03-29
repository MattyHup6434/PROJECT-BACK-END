    // new
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')
const db = require("../models/db");
exports.register = async (req, res, next) => {
  const {  username, password, confirmPassword, email, name, address, phone,birthdate } = req.body;
  try {
    // validation
    if (!(username && password && confirmPassword)) {
      return next(new Error("Fulfill all inputs"));
    }
    if (confirmPassword !== password) {
      throw new Error("confirm password not match");
    }

    

    const hashedPassword = await bcrypt.hash(password, 8);
    console.log(hashedPassword);
    const data = {
      username,
      password: hashedPassword,
      email,
      name,
      address,
      phone,
      birthdate
    };

    const rs = await db.user.create({ data  })
    console.log(rs)

    res.json({ msg: 'Register successful' })
  } catch (err) {
    next(err);
  }
};


exports.login = async (req, res, next) => {
  const {username, password} = req.body
  try {
    // validation
    if( !(username.trim() && password.trim()) ) {
      throw new Error('username or password must not blank')
    }
    // find username in db.user
    const user = await db.user.findFirstOrThrow({ where : { username }})
    // check password
    const pwOk = await bcrypt.compare(password, user.password)
    if(!pwOk) {
      throw new Error('invalid login')
    }
    // issue jwt token 
    const payload = { id: user.id }
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '30d'
    })
    console.log(token)
    res.json({token : token})
  }catch(err) {
    next(err)
  }
};
// getById
exports.getUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    if (id === undefined || id === null) {
      throw new Error('Missing ID for get');
    }
    const userId = Number(id);
    const user = await db.user.findFirst({
      where: {
        id: userId
      }
    });

    if (!user) {
      throw new Error('User not found');
    }

    res.json(user);
  } catch (err) {
    next(err);
  }
};

// getAllUsers
exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await db.user.findMany();
    res.json(users);
  } catch (err) {
    next(err);
  }
};



exports.getme = (req,res,next) => {
  res.json(req.user)
}

