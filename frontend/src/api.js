import axios from "axios";

const credentials = (username, password) => {
  axios
    .get("http://localhost:3000/api/credentials", { username, password })
    .then(response => response)
    .catch(() => false);
};

const login = (username, password) => {
  axios
    .put("http://localhost:3000/api/login", { username, password })
    .then(response => console.log(response))
    .catch(error => console.log(error));
};

export default { credentials, login };
