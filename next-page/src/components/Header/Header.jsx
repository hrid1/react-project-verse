import { IoBook } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div className="shadow-md p-4 items-center flex justify-between">
      {/* logo section */}
      <Link className="inline-flex gap-2 items-center ">
        <div>
          <IoBook className="h-7 w-7 mt-1 text-blue-500"></IoBook>
        </div>
        <h1 className=" font-bold text-3xl">nextPage</h1>
      </Link>
      {/* nav item section */}
      <div>
        <ul className="hidden lg:flex gap-4 font-bold text-xl">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-blue-600" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/books"
              className={({ isActive }) => (isActive ? "text-blue-600" : "")}
            >
              Books
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "text-blue-600" : "")}
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
