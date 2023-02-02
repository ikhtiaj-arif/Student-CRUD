import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layouts/Dashboard";
import Main from "../Layouts/Main";
import Home from "../Pages/Home";
import Login from "../Pages/LogInReg/Login";
import Reg from "../Pages/LogInReg/Reg";
import AddStudent from "../Pages/Private/AddStudent";
import AllStudents from "../Pages/Private/AllStudents";
import EditStudent from "../Pages/Private/EditStudent";
import ViewStudent from "../Pages/Private/ViewStudent";

export const routes = createBrowserRouter([
    {
        path: "/", 
        element: <Main />,
        // errorElement:  ,
        children: [
            {
                path: "/",
                element: <Home />
            },

            {
              path: "/register",
              element: <Reg />
            },
            {
              path: "/login",
              element: <Login />
            }
        ]
    },
    {
      path: '/dashboard',
      element: <Dashboard />,
      // errorElent,
      children: [
        {
          path: '/dashboard',
          element: <AddStudent />
        },
        {
          path: "/dashboard/allStudents",
          element: <AllStudents />
        },
        {
          path: "/dashboard/view/:id",
          element: <ViewStudent />
        },
        {
          path: "/dashboard/edit/:id",
          element: <ViewStudent />
        },
      ]
    }
])