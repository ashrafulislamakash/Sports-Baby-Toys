import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import AllToys from "../Pages/AllToys/AllToys";
import AddToy from "../Pages/AddToy/AddToy";
import Blogs from "../Pages/Blogs/Blogs";
import Mytoys from "../Pages/Toys/Toys";
import PrivateRoute from "../privateRoute/PrivateRoute";
import Toys from "../Pages/Toys/Toys";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addtoy",
        element: (
          <PrivateRoute>
            <AddToy></AddToy>
          </PrivateRoute>
        ),
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/toys",
        element: (
          <PrivateRoute>
            <Toys></Toys>
          </PrivateRoute>
        ),
      },
      {
        path: "/alltoys",
        element: <AllToys></AllToys>,
        loader: () => fetch("https://sports-baby-toys-server.vercel.app/"),
      },
    ],
  },
]);

export default router;
