import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home';
import MainPage from './Components/MainPage';
import Statistics from './Components/statistics';




const router = createBrowserRouter([
  {
    path:"/",
    element: <MainPage></MainPage> ,
    
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader: ()=> fetch('/public/donation.json')
      },
      {       
        path:"/donation",
        element: <div>Donation</div>,
        
      },
      {
        path:"/statistics",
        element: <Statistics></Statistics>
      },

    ],
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
