function getUser(req, res) {
  console.log("PUT /api/login");
  console.log(req.body);

  let status;
  let message;
  if (!req.body.username || !req.body.password) {
    status = 400;
    message = "Faltan campos obligatorios";

    res.status(status).send({ message });
  } else {
    const err = req.body.username.length < 4 || req.body.password.length < 4;
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
  getUser
};
