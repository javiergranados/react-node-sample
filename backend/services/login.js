const utils = require("../utils");

function credentials(req, res) {
  const available =
    utils.checkUsername(req.body.username) &&
    utils.checkPassword(req.body.password);

  res.status(200).send({ available });
}

function login(req, res) {
  let status;
  let message;
  if (!req.body.username || !req.body.password) {
    status = 400;
    message = "Faltan campos obligatorios";
  } else {
    const available =
      utils.checkUsername(req.body.username) &&
      utils.checkPassword(req.body.password);

    if (available) {
      status = 200;
      message = "Login correcto";
    } else {
      status = 400;
      message = "Error al realizar la petición";
    }

    res.status(status).send({ message });
  }
}

module.exports = {
  credentials,
  login
};
