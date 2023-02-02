import { createBrowserRouter } from "react-router-dom";
import Error from "../Components/Error";
import Dashboard from "../Layouts/Dashboard";
import Main from "../Layouts/Main";
import Home from "../Pages/Home";
import Login from "../Pages/LogInReg/Login";
import Reg from "../Pages/LogInReg/Reg";
import AddStudent from "../Pages/Private/AddStudent";
import AllStudents from "../Pages/Private/AllStudents";
import EditStudent from "../Pages/Private/EditStudent";
import ViewStudent from "../Pages/Private/ViewStudent";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: "/", 
        element: <Main />,
        errorElement: <Error />,
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
            },
           
        ]
    },
    {
      path: '/dashboard',
      element: <PrivateRoute>
        <Dashboard />
        </PrivateRoute>,
      errorElement: <Error />,
      children: [
        {
          path: '/dashboard',
          element: <PrivateRoute>
              <AddStudent />
          </PrivateRoute>
        },
        {
          path: "/dashboard/allStudents",
          element: <PrivateRoute><AllStudents /></PrivateRoute>
        },
        {
          path: "/dashboard/view/:id",
          loader: ({params}) => fetch(`https://student-crud-server.vercel.app/students/${params.id}`),
          element:<PrivateRoute><ViewStudent /></PrivateRoute>
        },
        {
          path: "/dashboard/edit/:id",
          loader: ({params}) => fetch(`https://student-crud-server.vercel.app/students/${params.id}`),
          element: <PrivateRoute><EditStudent /></PrivateRoute>
        },
      ]
    }
])