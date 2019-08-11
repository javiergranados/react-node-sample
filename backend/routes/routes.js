const express = require("express");
const controller = require("./controller");

const routes = express.Router();

routes.put("/credentials", controller.credentials);
routes.put("/login", controller.login);

module.exports = routes;
