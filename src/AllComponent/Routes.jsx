import {
    createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout/MainLayout";
import Home from "./Main/Home";

import UserProfile from "./Main/UserProfile";
import ErrorPage from "./ErrorPage/ErrorPage";
import AllTrip from "./Main/AllTrip";
import Detail from "./Main/Details/Detail";
import Experience from "./Main/Experience/Experience";
import Contact from "./Main/Contact";
import Login from "./Authentication/Login";
import Register from "./Authentication/Register";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
        // errorElement: <ErrorPage></ErrorPage>,
        loader: () => fetch("/FakeData.json"),
         children: [
          {
            path: "/",
            element: <Home></Home>,
          },
          {
            path: "/alltrip",
            element: <AllTrip></AllTrip>,
            loader: () => fetch("/FakeData.json"),
          },
          {
            path: "/userprofile",
            element: <UserProfile></UserProfile>
          },
          {
            path: "/experience",
            element: <Experience></Experience>
          },
          {
            path: "/detail/:id",
            element: <Detail></Detail>,
            loader: async ({params}) => {
              const res = await fetch("/FakeData.json")
              const data = await res.json()
             
              const singleData = data.find(d => d.id === params.id)
           
              return singleData;
            }
          },
         {
          path: "/contact",
          element: <Contact></Contact>
         },
         {
          path: "/login",
          element: <Login></Login>
         },
         {
          path: "/register",
          element: <Register></Register>
         }
          
         ]
    },
  ]);
  export default router;