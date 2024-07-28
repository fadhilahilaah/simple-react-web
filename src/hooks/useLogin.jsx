import React, { useEffect, useState } from "react";
import { getUsername } from "../services/auth.service";

const useLogin = () => {
  const [username, setUsername] = useState("");

  // get username
  useEffect(() => {
    const token = localStorage.getItem("token");
    // Check if token exists
    if (token) {
      // Extract and set the username from the token
      setUsername(getUsername(token));
    } else {
      // If no token is found, redirect to login page
      window.location.href = "/login";
    }
  }, []);

  return username;
};

export default useLogin;
