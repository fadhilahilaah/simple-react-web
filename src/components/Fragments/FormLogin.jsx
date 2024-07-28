import { useEffect, useRef, useState } from "react";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input";
import { login } from "../../services/auth.service";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    // localStorage.setItem("email", event.target.email.value);
    // localStorage.setItem("password", event.target.password.value);

    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };

    // login with username and password 
    login(data, (status, res) => {
      if (status) {
        // Save the token to local storage
        localStorage.setItem("token", res);
        // Redirect to the products page
        window.location.href = "/products";
      } else {
        // Set the error message for failed login
        setLoginFailed(res.response.data);
      }
    });
  };

  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleLogin}>
      {/* username */}
      <InputForm
        label="Username"
        type="text"
        placeholder="username"
        name="username"
        ref={usernameRef}
      />

      {/* password */}
      <InputForm
        label="Password"
        type="password"
        placeholder="Enter Password"
        name="password"
      />

      <Button style="bg-blue-600 w-full" type="submit">
        Login
      </Button>

      {/* login failed */}
      {loginFailed && (
        <p className="text-red-500 italic text-center mt-5">{loginFailed}</p>
      )}
    </form>
  );
};

export default FormLogin;
