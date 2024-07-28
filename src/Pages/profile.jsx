import React from "react";
import useLogin from "../hooks/useLogin";

const ProfilePage = () => {
    const username = useLogin();
  return (
    <div>
      <h1 className="text-3xl font-bold">Profile</h1>
      <p className="text-xl">Username: {username}</p>
    </div>
  );
};

export default ProfilePage;
