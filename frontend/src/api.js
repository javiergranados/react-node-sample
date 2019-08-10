import axios from "axios";

const login = (username, password) => {
  axios
    .put("http://localhost:3000/api/login", { username, password })
    .then(response => console.log(response))
    .catch(error => console.log(error));
};

export default { login };
