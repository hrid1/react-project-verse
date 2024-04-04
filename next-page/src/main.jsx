import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import About from './components/About/About';
import Books from './components/Books/Books';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/", 
        element: <Home></Home>
      },
      {
        path: '/books',
        element: <Books></Books>,
        loader: () => fetch('https://api.itbook.store/1.0/new')
      },
      {
        path: "/about",
        element: <About></About>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
