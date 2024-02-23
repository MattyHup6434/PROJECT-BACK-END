require("dotenv").config();
const express = require("express");
const cors = require("cors");
const notFound = require("./src/middlewares/notFound");
const errorMiddleware = require("./src/middlewares/error");
const authRoute = require("./src/routes/auth-route");
const adminRoute = require("./src/routes/admin-route");

const app = express();

app.use(cors());
app.use(express.json());

// service
app.use("/auth", authRoute);
app.use("/admin", adminRoute);

// notFound
app.use(notFound);

// error
app.use(errorMiddleware);

let port = process.env.PORT;
app.listen(port, () => console.log(`'Server on Port : ${port}`));
