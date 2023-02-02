import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../Context/UserContext";

const Error = () => {
  const { user } = useContext(UserAuth);
  return (
    <div className="text-5xl font-bold text-center my-56 h-screen">
      404 Not Found,
      {user && user.uid ? (
        <>
          <Link className="text-secondary underline" to="/dashboard">
            Back To Home
          </Link>
        </>
      ) : (
        <>
          <Link className="text-secondary underline" to="login">
            Back To Home
          </Link>
        </>
      )}
    </div>
  );
};

export default Error;
