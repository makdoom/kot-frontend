import { createBrowserRouter, Navigate } from "react-router-dom";

import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import AppLayout from "@/pages/AppLayout";
import Home from "@/pages/home";
import ProtectedRoute from "./ProtectedRoutes";
import NotFound from "@/pages/NotFound";

export const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/auth/login" /> },
  { path: "/auth/login", element: <Login /> },
  { path: "/auth/register", element: <Register /> },
  {
    path: "/app",
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: [{ index: true, element: <Home /> }],
  },

  { path: "*", element: <NotFound /> },
]);
