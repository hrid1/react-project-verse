import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const About = () => {

    const user = useContext(AuthContext);
    // console.log(user);

    return (
        <div>
            <h2>This Is About</h2>
            <h4>
                {user && 
                <span>
                    {user.displayName}
                </span> }
            </h4>
        </div>
    );
};

export default About;