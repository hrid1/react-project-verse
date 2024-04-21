import { useContext } from "react";
import BreakingNews from "../components/BreakingNews";
import Header from "../shared/Header";
import LeftsideNav from "../shared/LeftsideNav";
import Navbar from "../shared/Navbar";
import RightsideNav from "../shared/RightsideNav";
import { AuthContext } from "../provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";

const Home = () => {
  const allNews = useLoaderData();
  

  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>

      <Navbar></Navbar>
      <h1>This is Homepage</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className=" border border-blue-500 col-span-1">
          <LeftsideNav></LeftsideNav>
        </div>
        <div className="col-span-2">
          News Coming strokeLinejoin
          {
            allNews.map(news => <NewsCard key={news._id} news={news}></NewsCard>)
          }
        </div>
        <div className="col-span-1">
          <RightsideNav></RightsideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
