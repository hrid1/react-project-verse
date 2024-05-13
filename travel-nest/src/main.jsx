import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import Root from './Root/Root';
import Home from './components/Home';
import Contact from './components/Contact';
import Register from './components/Register';
import Login from './components/Login';
import Rooms from './components/Rooms';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      }, 
      {
        path: '/rooms',
        element: <Rooms></Rooms>
      }, 
      {
        path: '/register',
        element: <Register></Register>
      }, 
      {
        path: '/login',
        element: <Login></Login>
      }, 
      {
        path: '/contact', 
        element: <Contact></Contact> 
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
