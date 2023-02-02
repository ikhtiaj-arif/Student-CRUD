import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { UserAuth } from "../Context/UserContext";

const Navbar = () => {
  const { user, setLoading, logOutUser } = useContext(UserAuth);
  const handleLogOut = () => {
    logOutUser()
      .then(() => {})
      .catch((e) => toast.error(e.message));
  };

  return (
    <div className="py-10 bg-gray-900 ">
      <div className="md:w-3/4 mx-auto flex justify-between items-center">
        <div><Link to="/">LOGO</Link> </div>
        <div>
          {user && user.uid ? (
            <>
            <Link className="border p-2" to="/dashboard">Dashboard</Link>
              {user.email}{" "}
              <button
                className="btn btn-outline btn-secondary mx-2"
                onClick={handleLogOut}
              >
                Logout
              </button>
            </>
          ) : (
            <>

            <Link to="/login">Login</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
