

/* /* import Header from './assets/components/Layout/Header'
import HeaderPriv from './assets/components/Layout/HeaderPriv' */
/* import HomePu from "./assets/components/Home/Public/HomePu"*/
/* import Login from "./assets/components/Login/Login" */ 
import React from "react";
import { RouterProvider } from "react-router-dom";
import { Route } from "react-router-dom"; // Ajusta esta ruta según la ubicación de tu archivo de router
import router from "./routes/route";

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;

