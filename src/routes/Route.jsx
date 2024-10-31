import React from "react";
import { createBrowserRouter, Router } from "react-router-dom";
import HomePriv from "../pages/Home/Private/HomePriv";
import HomePu from "../pages/Home/Public/HomePu";
import Login from "../pages/Login/Login";
import { useAuth } from "../auth/AuthProvider";
import { Navigate } from "react-router-dom";
import Projects from "../pages/Projects/Projects";
import { Epics } from "../pages/Epics/Epics";
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
    path: "/home",
    element: (
      <PrivateRoute>
        <HomePriv />
      </PrivateRoute>
    ),
  },
  {
    path: "/home/projects",
    element: (
      <PrivateRoute>
        <Projects />
      </PrivateRoute>
    ),
  },

  {
    path:"/home/projects/:projectId/epics" ,
    element: (<PrivateRoute><Epics /></PrivateRoute>)
  }
]);
export default router;
