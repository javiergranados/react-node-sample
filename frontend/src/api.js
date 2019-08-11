import axios from "axios";

const credentials = (username, password) =>
  axios
    .put("http://localhost:3000/api/credentials", { username, password })
    .then(response => response.data.available)
    .catch(() => false);

const login = (username, password) =>
  axios
    .put("http://localhost:3000/api/login", { username, password })
    .then(response => ({ response: response.data.message, error: false }))
    .catch(error => ({ response: error.response.data.message, error: true }));

export default { credentials, login };
