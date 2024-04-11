import Header from "../../shared/Header";
import LeftsideNav from "../../shared/LeftsideNav/LeftsideNav";
import Navbar from "../../shared/Navbar";
import RightsideNav from "../../shared/RightsideNav/RightsideNav";
import BreakingNews from "./BreakingNews";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="grid-col-1">
                    <LeftsideNav></LeftsideNav>
                </div>
                <div className="md:col-span-2">
                    <h2>News comming soon.....</h2>
                </div>
                <div>
                    <RightsideNav></RightsideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;