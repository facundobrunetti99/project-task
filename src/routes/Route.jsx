import React from "react";
import { createBrowserRouter, Router } from "react-router-dom";
import HomePu from "../assets/components/Home/Public/HomePu";
import Login from "../assets/components/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePu></HomePu>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/singup",
    element: <Login></Login>,
  },
]);
export default router;
