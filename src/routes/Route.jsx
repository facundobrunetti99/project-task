import React from "react";
import { createBrowserRouter, Router } from "react-router-dom";
import HomePu from "../assets/components/Home/Public/HomePu";
import HomePriv from"../assets/components/Home/Private/HomePriv"
import Login from "../assets/components/Login/Login";
import HeaderPriv from "../assets/components/Layout/HeaderPriv"
import { useAuth } from "../auth/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? children : <Navigate to="/login" />;
};
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
  {
    path: '/protected', 
    element: (
      <PrivateRoute>
        <HomePriv /> 
      </PrivateRoute>
    ),
  },
]);
export default router;
