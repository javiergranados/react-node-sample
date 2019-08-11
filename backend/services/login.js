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
    message = "Required fields missed";
  } else {
    const available =
      utils.checkUsername(req.body.username) &&
      utils.checkPassword(req.body.password);

    if (available) {
      status = 200;
      message = "Login successful";
    } else {
      status = 400;
      message = "Something went wrong!";
    }

    setTimeout(() => {
      res.status(status).send({ message });
    }, 2000);
  }
}

module.exports = {
  credentials,
  login
};
