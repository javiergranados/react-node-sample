const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const routes = require("./routes/routes");
const config = require("./config/config");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:3030" }));

app.use("/api", routes);
app.listen(config.port, () => {
  // eslint-disable-next-line
  console.log(`API REST corriendo en http://localhost:${config.port}`);
});
