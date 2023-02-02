import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { UserAuth } from "../Context/UserContext";
import { FaOutdent, FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const { user, setLoading, logOutUser } = useContext(UserAuth);
  const handleLogOut = () => {
    logOutUser()
      .then(() => {})
      .catch((e) => toast.error(e.message));
  };

  return (
    <div className="py-10 bg-gray-900 ">
      <div className="md:w-3/4 w-[95%] mx-auto flex justify-between items-center">
        <div>
          <Link className="text-4xl font-semibold" to="/login">Student Crud</Link>{" "}
        </div>
        <div>
          <ul className="flex justify-between items-center">
            {user && user.uid ? (
              <>
               
                <li className="text-[16px] font-bold mx-5">{user.email} </li>
                <li>
                  <Link className="btn btn-outline" to="/dashboard">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <button
                    className="btn btn-outline btn-secondary mx-2"
                    onClick={handleLogOut}
                  >
                    Logout
                  </button>
                </li>
                <li>
                  <label
                    htmlFor="dashboard-drawer"
                    className=" drawer-button md:hidden"
                  >
                    <FaOutdent className="w-4 h-4 mr-3" />
                  </label>
                </li>
              </>
            ) : (
              <>
                <Link className="btn btn-outline btn-secondary" to="/login">Login</Link>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
