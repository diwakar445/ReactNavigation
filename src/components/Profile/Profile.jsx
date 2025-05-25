import React, { useContext } from "react";
import UserContext from "../../context/UserContext";
const Profile = () => {
  const { user } = useContext(UserContext);
  if (!user) return <div>Please Login</div>;
  return (
    <div className="bg-gray-600 p-4 text-white text-3xl">
      userName: {user.username}
      userName: {user.email}
    </div>
  );
};
export default Profile;
