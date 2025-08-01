import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Route/Router.jsx';
import Authprovider from './Provider/Authprovider.jsx';
import { ToastContainer } from 'react-toastify';
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Authprovider>
          <RouterProvider router={router} />
      </Authprovider>
      <ToastContainer></ToastContainer>
  </StrictMode>,
)
