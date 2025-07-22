import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../Root/Root";
import Home from "../components/Home";
import Errorpage from "../components/Errorpage";

const router = createBrowserRouter([
   {
    path:'/',
    element:<Root></Root>,
    errorElement:<Errorpage></Errorpage>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        }
    ]
   }
])

export default router;