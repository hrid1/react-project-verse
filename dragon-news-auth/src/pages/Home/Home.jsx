import { useLoaderData } from "react-router-dom";
import Header from "../../shared/Header";
import LeftsideNav from "../../shared/LeftsideNav/LeftsideNav";
import Navbar from "../../shared/Navbar";
import RightsideNav from "../../shared/RightsideNav/RightsideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";

const Home = () => {

    const news = useLoaderData();

    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="grid-col-1">
                    <LeftsideNav></LeftsideNav>
                </div>
                <div className="md:col-span-2 ">
                   
                    {
                        news.map(anews => <NewsCard  key={anews.id} news={anews}> </NewsCard>)
                    }
                </div>
                <div>
                    <RightsideNav></RightsideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;