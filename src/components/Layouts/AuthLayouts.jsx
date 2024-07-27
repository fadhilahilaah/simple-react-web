import React from "react";
import { Link } from "react-router-dom";

const AuthLayout = (props) => {
  const { title, children, type } = props;
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-sm bg-white rounded-lg shadow p-5">
        <h1 className=" text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, Please enter your details
        </p>
        {children}
        <Navigation type={type} />
      </div>
    </div>
  );
};

const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p className="text-sm mt-3 text-center">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="font-bold text-blue-600 ms-1 text-center"
        >
          Sign up here.
        </Link>
      </p>
    );
  } else {
    return (
    <p className="text-sm mt-3 text-center">
      Already have an account?{" "}
      <Link to="/login" className="font-bold text-blue-600 ms-1 text-center">
        Login.
      </Link>
    </p>
    )
  };
};

export default AuthLayout;
