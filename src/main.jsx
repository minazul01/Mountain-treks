import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {

  RouterProvider,
} from "react-router-dom";
import router from './AllComponent/Routes';
import AuthenticationProvider from './AllComponent/Authentication/AuthenticationProvider';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthenticationProvider routes={<RouterProvider router={router}></RouterProvider>}>
      
    </AuthenticationProvider>
  </StrictMode>,
)
