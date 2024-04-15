import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {

    const {user} = useContext(AuthContext);
    return (
        <div className="navbar bg-primary text-primary-content">
        <button className="btn btn-ghost text-xl">Auth Master</button>

        <div className="">
            <ul className="navbar gap-4 font-semibold">
                <li> <NavLink to='/'> Home </NavLink> </li>
                <li> <NavLink to='/login'> Login </NavLink> </li>
                <li> <NavLink to='/register'> Register </NavLink> </li>
            </ul>
        </div>

        <div className="navend">

           <h1>Hello</h1>
           {
             {user} && <p>! {user.email} <span><button className="btn">Logout</button></span> </p> 
           }

        </div>
      </div>
    );
};

export default Header;