import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home";
import Login from "../Pages/LogInReg/Login";
import Reg from "../Pages/LogInReg/Reg";

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
    }
])