import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../Root/Root";
import Home from "../components/Home";
import Errorpage from "../components/Errorpage";
import Alljobs from "../components/Alljobs";
import AddJob from "../components/AddJob";
import Myapplications from "../components/Myapplications";
import MyJobPost from "../components/MyJobPost";
import Login from "../components/Login";
import Register from "../components/Register";
import Privateroute from '../Route/Privateroute'
import Jobdetails from "../components/Jobdetails";
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
            element:<Privateroute><Myapplications></Myapplications></Privateroute>
        },
        {
            path:'/my-jobs',
            element:<Privateroute><MyJobPost></MyJobPost></Privateroute>
        },
        {
            path:'/jobdetails/:id',
            element:<Privateroute><Jobdetails></Jobdetails></Privateroute>,
            loader:({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)
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