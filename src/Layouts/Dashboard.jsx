import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";



import {
  FaInstalod,
  FaBell,
  FaCalendarPlus,
  FaUsers,
  FaUserClock,
  FaUserCheck,
  FaRegEdit,
  
} from "react-icons/fa";

import { UserAuth } from "../Context/UserContext";
import Navbar from "../Pages/Navbar";

const Dashboard = () => {
  const { user } = useContext(UserAuth);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
  setLoading(false)
   
  }, [user?.email]);

  if (loading) {
    return (
      <div>
       
      </div>
    );
  }
// console.log(user);
  return (
    <div>
      <Navbar />
      <div className="drawer drawer-mobile mt-5">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="divide-y divide-gray-700"></div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <div className="h-full p-3 space-y-2 w-60 ">
            <div className="flex items-center p-2 space-x-4">
              <img
                src='https://cdn-icons-png.flaticon.com/512/21/21104.png'
                alt=""
                className="w-12 h-12 rounded-full dark:bg-gray-500"
              />
              <div>
                <h2 className="text-lg font-semibold">{user?.displayName}</h2>
                <span className="flex items-center space-x-1"></span>
              </div>
            </div>
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              <li className="bg-gray-300 text-gray-800 ">
                <div
                  
                  
                  className="flex items-center text-center text-[18px] font-bold p-2 rounded-md"
                >
                  <span>Dashboard</span>
                </div>
              </li>
           
             
                <>
               <li>
                    <Link
                      to="/dashboard"
                      href="#"
                      className="flex items-center p-2 space-x-3 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300"
                    >
                      <FaCalendarPlus className="w-6 h-4" />
                      <span className="text-[16px] font-medium">Add A Student</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dashboard/allStudents"
                      href="#"
                      className="flex items-center p-2 space-x-3 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300"
                    >
                      <FaRegEdit className="w-6 h-4" />
                      <span className="text-[16px] font-medium">Manage All Students</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to=""
                      href="#"
                      className="flex items-center p-2 space-x-3 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300"
                    >
                      <FaInstalod className="w-6 h-4" />
                      <span className="text-[16px] font-medium">Settings</span>
                    </Link>
                  </li>
                </>
       
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;