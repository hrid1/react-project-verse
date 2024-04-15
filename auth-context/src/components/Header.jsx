import { NavLink } from "react-router-dom";

const Header = () => {
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
      </div>
    );
};

export default Header;