import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home';
import MainPage from './Components/MainPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ErrorPage from './Components/ErrorPage';
import DonationDetails from './Components/DonationDetails';
import DonatedPage from './Components/DonatedPage';
import StatisticsPage from './Components/StatisticsPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage></MainPage>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/donation.json'),
      },
      {
        path: "/donation",
        element: <DonatedPage></DonatedPage>,
        loader: () => fetch('/donation.json'),

      },
      {
        path:"/donated/:id",
        element: <DonationDetails></DonationDetails>,
        loader: () => fetch('/donation.json'),
      },
     {
      path: "/statistics",
      element: <StatisticsPage></StatisticsPage>,
      loader: () => fetch('/donation.json'),
     }

    ],
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <ToastContainer />
  </React.StrictMode>,
)
