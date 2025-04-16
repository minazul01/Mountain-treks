import {
    createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout/MainLayout";
import Home from "./Main/Home";
import UpdateProfile from "./Main/UpdateProfile";
import UserProfile from "./Main/UserProfile";
import ErrorPage from "./ErrorPage/ErrorPage";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
         children: [
          {
            path: "/",
            element: <Home></Home>
          },
          {
            path: "/updateprofile",
            element: <UpdateProfile></UpdateProfile>
          },
          {
            path: "/userprofile",
            element: <UserProfile></UserProfile>
          }
          
         ]
    },
  ]);
  export default router;