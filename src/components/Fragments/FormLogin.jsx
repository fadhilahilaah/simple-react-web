import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    window.location.href = '/products';
  };
  return (
    <form onSubmit={handleLogin}>
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

      <Button style="bg-blue-600 w-full" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;