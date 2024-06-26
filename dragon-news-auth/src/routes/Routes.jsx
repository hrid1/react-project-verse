import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import News from "../pages/News/News";
import PrivateRoute from "./PrivateRoute";
import About from "../pages/About/About";
import Career from "../pages/Career/Career";


const router = createBrowserRouter([
    {
        path: '/', 
        element: <Root></Root>,
        children: [
            {
                path: '/', 
                element: <Home></Home>,
                loader: () => fetch('/news.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register', 
                element: <Register></Register>
            }, 
            {
                path: '/news/:id',
                element:<PrivateRoute> <News></News></PrivateRoute>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/career',
                element: <Career></Career>
            }
        ]
    }
])

export default router;