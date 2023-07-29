import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage/ErrorPage.jsx";
import Login from "./Pages/Login/Login.jsx";
import AddToy from "./Pages/AddToy/AddToy.jsx";
import AllToys from "./Pages/AllToys/AllToys.jsx";
import Blogs from "./Pages/Blogs/Blogs.jsx";
import Register from "./Pages/Register/Register.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App></App>,
//     errorElement: <ErrorPage />,
//   },

//   {
//     path: "/login",
//     element: <Login></Login>,
//   },
//   {
//     path: "/register",
//     element: <Register></Register>,
//   },
//   {
//     path: "/addtoy",
//     element: <AddToy></AddToy>,
//   },
//   {
//     path: "/alltoys",
//     element: <AllToys></AllToys>,
//     loader: () => fetch("http://localhost:5000/addtoy"),
//   },
//   {
//     path: "/blogs",
//     element: <Blogs></Blogs>,
//   },
// ]);

import router from "./Routes/Routes";
import AuthProvider from "./providers/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
