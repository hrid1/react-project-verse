// import Input from "../components/Input";
import Chat from "../components/Chat";
import Navbar from "../components/Navbar";
import Slidebar from "../components/Slidebar";


const Home = () => {
    return (
        <div className="h-screen flex items-center justify-center ">
            

            <div className="w-3/4 h-5/6  bg-gray-600 grid grid-cols-3 rounded-lg overflow-hidden ">
                {/* slide bar section */}
               
               <Slidebar></Slidebar>
               

                {/* chat section */}

                
                <Chat></Chat>

                

                
            </div>



        </div>
    );
};

export default Home;