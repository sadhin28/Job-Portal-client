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
            element:<AddJob></AddJob>
        },
        {
            path:'/application/me',
            element:<Myapplications></Myapplications>
        },
        {
            path:'/my-jobs',
            element:<MyJobPost></MyJobPost>
        }
    ]
   }
])

export default router;