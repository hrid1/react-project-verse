import { createBrowserRouter } from "react-router-dom";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ServiceLayout from "../layouts/ServiceLayout";
import { HiHome } from "react-icons/hi";
import Service from "../Pages/Services/Service";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ],
  },

  {
    path: '/services',
    element: <ServiceLayout></ServiceLayout>,
    children: [
      {
        path: '/services',
        element: <Service></Service>
      },
      {
        path: ':id',
        element: <ServiceDetails></ServiceDetails>
      }
    ]
  }
]);

export default router;
