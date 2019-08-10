const utils = require("../utils");

function credentials(req, res) {
  console.log("GET /api/credentials");

  const err =
    !utils.checkUsername(req.body.username) ||
    !utils.checkPassword(req.body.password);

  let status;
  let message;
  if (err) {
    status = 500;
    message = "Error al realizar la petición";
  } else {
    status = 200;
    message = "Login correcto";
  }

  res.status(status).send({ message });
}

function login(req, res) {
  console.log("PUT /api/login");

  if (!req.body.username || !req.body.password) {
    const status = 400;
    const message = "Faltan campos obligatorios";

    res.status(status).send({ message });
  } else {
    credentials(req, res);
  }
}

module.exports = {
  credentials,
  login
};
