import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormRegister = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    window.location.href = "/products";
  };
  return (
    <form onSubmit={handleLogin}>
      {/* full name */}
      <InputForm
        label="Fullname"
        type="text"
        placeholder="insert your name"
        name="fullname"
      />

      {/* email */}
      <InputForm
        label="Email"
        type="email"
        placeholder="example@gmail.com"
        name="email"
      />

      {/* password */}
      <InputForm
        label="Password"
        type="password"
        placeholder="Enter Password"
        name="password"
      />

      {/* confirm password */}
      <InputForm
        label="Confirm Password"
        type="password"
        placeholder="Enter Password"
        name="c-password"
      />

      <Button style="bg-blue-600 w-full" type="submit">
        Register
      </Button>
    </form>
  );
};

export default FormRegister;
