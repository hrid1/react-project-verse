import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const { user, logOutUser,  } = useContext(AuthContext);

  const handleSignOut = () => {
    logOutUser()
    .then(alert('Logout succesful'))
    .catch(error => {
        console.log(error.message);
    })
  }


  return (
    <header className="bg-slate-950 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="text-xl font-bold">
            Travel Nest
          </a>
        </div>
        <nav className="flex space-x-4">
          <NavLink to="/" className="hover:text-gray-300">
            Home
          </NavLink>
          <NavLink to="/rooms" className="hover:text-gray-300">
            Rooms
          </NavLink>
          <NavLink to="/contact" className="hover:text-gray-300">
            Contact
          </NavLink>

          {user ? (
            <>
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-2">
                <span className="text-2xl">< FaUserCircle /></span>
                <p className="text-white"> {user.displayName}</p>
                </span>
                <button onClick={handleSignOut} className="btn">Logout</button>
              </div>
            </>
          ) : (
            <>
              <NavLink to="/register">
                <button className="bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white py-2 px-4 rounded transition duration-300 ease-in-out">
                  Sign Up
                </button>
              </NavLink>
              <NavLink to="/login">
                <button className="bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white py-2 px-4 rounded transition duration-300 ease-in-out">
                  Sign In
                </button>
              </NavLink>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
