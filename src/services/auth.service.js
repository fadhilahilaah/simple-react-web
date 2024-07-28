import axios from "axios";
import { jwtDecode } from "jwt-decode";

// Login with username and password and get token from response
export const login = (data, callback) => {
  axios
    .post("https://fakestoreapi.com/auth/login", data)
    .then((res) => {
      callback(true, res.data.token);
    })
    .catch((err) => {
      callback(false, err);
    });
};

// Get username from token
export const getUsername = (token) => {
  const decode = jwtDecode(token);
  return decode.user;
};
