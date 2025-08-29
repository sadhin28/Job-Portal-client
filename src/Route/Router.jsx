import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../Root/Root";
import Home from "../components/Home";
import Errorpage from "../components/Errorpage";
import Alljobs from "../components/Alljobs";
import AddJob from "../components/AddJob";
import Myapplications from "../components/Myapplications";
import Login from "../components/Login";
import Register from "../components/Register";
import Privateroute from '../Route/Privateroute'
import Jobdetails from "../components/Jobdetails";
import Applyforjob from "../components/Applyforjob";
import MyJobPost from "../components/MyJobPost";
import ViewApplicationJob from "../components/ViewApplicationJob";
import UpdateJobPost from "../components/UpdateJobPost";

const router = createBrowserRouter([
 
    {
    path:'/',
    element:<Root></Root>,
    errorElement:<Errorpage></Errorpage>,
    children:[
        {
            path:'/',
            element:<Home></Home>

        },
        {
            path:'/jobs',
            element:<Alljobs></Alljobs>
        },
        {
            path:'/add-jobs',
            element:<Privateroute><AddJob></AddJob></Privateroute>
        },
        {
            path:'/application/me',
            element:<Privateroute><Myapplications></Myapplications></Privateroute>,
            
        },
        {
            path:'/my-jobs',
            element:<Privateroute><MyJobPost></MyJobPost></Privateroute>
        },
        {
            path:'/viewApplication/:job_id',
            element:<Privateroute><ViewApplicationJob></ViewApplicationJob></Privateroute>,
            loader:({params})=>fetch(`https://job-portal-server-seven-delta.vercel.app/job-application/${params.job_id}`)
        },
        
        {
            path:'/jobdetails/:id',
            element:<Privateroute><Jobdetails></Jobdetails></Privateroute>,
            loader:({params})=>fetch(`https://job-portal-server-seven-delta.vercel.app/jobs/${params.id}`)
        },
        {
            path:'/jobapply/:id',
            element:<Privateroute><Applyforjob></Applyforjob></Privateroute>,
            loader:({params})=>fetch(`https://job-portal-server-seven-delta.vercel.app/jobs/${params.id}`)
        },
        {
            path:'/UpdateJobPost/:id',
            element:<Privateroute><UpdateJobPost></UpdateJobPost></Privateroute>,
            loader:({params})=>fetch(`https://job-portal-server-seven-delta.vercel.app/jobs/${params.id}`)
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        }
    ]
   }
])

export default router;