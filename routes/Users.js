const express = require("express");
const controller = require("../controller/Users");
const route = express.Router();

route.get("/students/:id", controller.getDataById);
route.get("/students/", controller.getAllData);
route.post("/students/register", controller.createUser);
route.post("/students/login", controller.loginUser);
route.put("/students/update", controller.updateUser);
route.delete("/students/:id", controller.deleteUser);
module.exports = route;
