import Navbar from "./Navbar";
import Search from "./Search";

const Slidebar = () => {
  return (
    <section >
      {/* header  */}
      <Navbar></Navbar>

      {/* search  and person info */}
      <Search></Search>
    </section>
  );
};

export default Slidebar;
