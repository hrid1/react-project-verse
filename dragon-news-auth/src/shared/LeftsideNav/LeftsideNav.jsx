import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftsideNav = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <div className="border p-2 rounded">
      <h2 className="text-2xl">All Category: {category.length}</h2>

      <div className=" space-y-6">
        {category.map((item) => (
          <NavLink
            className="m-2 text-xl font-semibold block "
            key={item.id}
            to= {`/category/${item.id}`}
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftsideNav;
