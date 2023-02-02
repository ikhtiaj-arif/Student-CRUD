
import React, { useContext } from 'react';
import { Navigate, useLocation } from "react-router-dom";

import { UserAuth } from '../Context/UserContext';


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(UserAuth);

    const location = useLocation();

    if(loading) {
        return <div>loading</div>
    }
    if(user && user?.uid){
        return children
    }
   return <Navigate to='/login' state={{from: location}} replace></Navigate>
  
};

export default PrivateRoute;