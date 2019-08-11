import axios from "axios";

const credentials = (username, password) =>
  axios
    .put("http://localhost:3000/api/credentials", { username, password })
    .then(response => response.data.available)
    .catch(() => false);

const login = (username, password) =>
  axios
    .put("http://localhost:3000/api/login", { username, password })
    .then(response => ({ success: true, response: response.data.message }))
    .catch(error => ({
      success: false,
      response: error.response.data.message
    }));

export default { credentials, login };
