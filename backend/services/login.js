const utils = require("../utils");

function credentials(req, res) {
  const err =
    !utils.checkUsername(req.body.username) ||
    !utils.checkPassword(req.body.password);

  res.status(200).send({ valid: !err });
}

function login(req, res) {
  let status;
  let message;
  if (!req.body.username || !req.body.password) {
    status = 400;
    message = "Faltan campos obligatorios";
  } else {
    const err =
      !utils.checkUsername(req.body.username) ||
      !utils.checkPassword(req.body.password);

    if (err) {
      status = 500;
      message = "Error al realizar la petición";
    } else {
      status = 200;
      message = "Login correcto";
    }

    res.status(status).send({ message });
  }
}

module.exports = {
  credentials,
  login
};
