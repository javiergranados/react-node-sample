const loginService = require("../services/login");

module.exports = {
  checkUser: loginService.checkUser,
  getUser: loginService.getUser
};
