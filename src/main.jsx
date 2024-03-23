import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root.jsx';
import Home from './Component/Home/Home.jsx';
import Jobs from './Jobs/Jobs.jsx';
import Statistics from './Statistics/Statistics.jsx';
import Blogs from './Blogs/Blogs.jsx';
import ErrorPage from './ErrorPage/ErrorPage.jsx';
import JobDetails from './Component/ElemetntCompo/FeaturedJob/Job/JobDetails.jsx';
import AppliedJobs from './Component/AppliedJobs/AppliedJobs.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/jobs",
        element:<Jobs></Jobs>,
      },
      {
        path:"/applied",
        element:<AppliedJobs></AppliedJobs>,
        loader:()=>fetch("../jobs.json")
      },
      {
        path:"/statistics",
        element:<Statistics></Statistics>,
      },
     {  path:"/blogs",
      element:<Blogs></Blogs>
     },
     {
      path:"/job/:id",
      element:<JobDetails></JobDetails>,
      loader:()=>fetch('../jobs.json'),
     }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
