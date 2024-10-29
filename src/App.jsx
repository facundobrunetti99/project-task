
import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Route";
import { AuthProvider } from "./auth/AuthProvider";

function App() {
  return (
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>
  );
}

export default App;
