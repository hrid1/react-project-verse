import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div className="navbar rounded bg-primary text-primary-content">
      <button className="btn btn-ghost text-xl navbar-start w-1/3">
        Auth Master
      </button>

      <div className=" mr-10 font-semibold">
        <ul className="navbar gap-4 ml-10font-semibold">
          <li>
            {" "}
            <NavLink to="/"> Home </NavLink>{" "}
          </li>
          <li>
            {" "}
            <NavLink to="/login"> Login </NavLink>{" "}
          </li>
          <li>
            {" "}
            <NavLink to="/register"> Register </NavLink>{" "}
          </li>
          <li>
            {" "}
            <NavLink to="/Order"> Order </NavLink>{" "}
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        {{ user } ? (
          <span>
            <h2> {user?.email}</h2>{" "}
            <button onClick={handleLogout} className="btn btn-xs">
              LogOut
            </button>
          </span>
        ) : (
          <p>Plz Login</p>
        )}
      </div>
    </div>
  );
};

export default Header;
