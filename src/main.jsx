import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home';
import MainPage from './Components/MainPage';


const router = createBrowserRouter([
  {
    path:"/",
    element: <MainPage></MainPage> ,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {       
        path:"/donation",
        element:<div>Donation</div>
      },
      {
        path:"/statistics",
        element:<div>Statistics</div>
      },

    ],
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
