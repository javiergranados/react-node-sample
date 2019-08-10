const loginService = require("../services/login");

module.exports = {
  credentials: loginService.credentials,
  login: loginService.login
};
