const express = require("express");
const controller = require("./controller");

const routes = express.Router();

routes.put("/login", controller.getUser);

module.exports = routes;
