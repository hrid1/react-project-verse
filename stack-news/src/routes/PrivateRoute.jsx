import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {

    const {user, loading } = useContext(AuthContext);
    // console.log(loading);
    const location = useLocation();
    console.log(location.pathname);


    if(loading) {
        return<span className="block  text-center mx-auto loading loading-bars loading-lg"></span>


    }

    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;