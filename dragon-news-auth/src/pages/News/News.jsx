import { useParams } from "react-router-dom";
import Header from "../../shared/Header";
import Navbar from "../../shared/Navbar";
import RightsideNav from "../../shared/RightsideNav/RightsideNav";


const News = () => {
  const { id } = useParams();



  return (
    <div className="">
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-4">
        {/* left side */}
        <div className="col-span-3">
          <h2 className="text-3xl bold">News Details</h2>
          <p>{id}</p>

          {/* {
              fetch('news.json')
              .then(res => res.json())
              .then(data => console.log(data))
            } */}
        </div>

        {/* right side */}
        <div>
          <RightsideNav></RightsideNav>
        </div>
      </div>
    </div>
  );
};

export default News;
