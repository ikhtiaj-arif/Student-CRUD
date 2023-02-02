import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../Context/UserContext";

const Home = () => {
  const { user } = useContext(UserAuth);
  return (
    <div className="text-5xl font-bold text-center my-56">
      {user && user.uid ? (
        <>Please Logout</>
      ) : (
        <>
          Welcome To home Please <Link className="text-secondary underline" to="login">Login</Link> or <Link className="text-secondary underline" to="/register">Register</Link> To continue
        </>
      )}
    </div>
  );
};

export default Home;
