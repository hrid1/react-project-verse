import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Home = () => {
    const {user} = useContext(AuthContext);

    console.log(user)
    

    return (
        <div>
            <h1>This si homepage</h1>
            <p>
                {
                    user && <span>{user}</span>
                }
            </p>
        </div>
    );
};

export default Home;