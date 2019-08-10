const express = require("express");
const controller = require("./controller");

const routes = express.Router();

routes.get("/login", controller.checkUser);
routes.put("/login", controller.getUser);

module.exports = routes;
