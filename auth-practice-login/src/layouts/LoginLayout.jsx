import { Outlet } from "react-router-dom";
import Menubar from "../components/Menubar/Menubar";

const LoginLayout = () => {
    return (
        <div>
           <Menubar></Menubar>
           <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;