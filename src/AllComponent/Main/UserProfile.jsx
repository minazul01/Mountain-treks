import { useContext } from "react";
import { MyContext } from "../Authentication/AuthenticationProvider";
import { Helmet } from "react-helmet";

const UserProfile = () => {
  const { user } = useContext(MyContext);

  return (
    <div className="text-center p-4 my-10">
      <Helmet>
        <title>User-Profile-page!</title>
      </Helmet>
      {user ? (
        <div>
          <div className="w-full flex justify-center items-center my-4"><img src={user.photoURL} alt="User" className="w-24 rounded-full" /></div>
          <h2 className="text-xl font-bold mt-2 my-4">{user.displayName}</h2>
          <p>{user.email}</p>
        </div>
      ) : (
        <p>Loading user info...</p>
      )}
    </div>
  );
};

export default UserProfile;
