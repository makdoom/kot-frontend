import { createBrowserRouter, Navigate } from "react-router-dom";

import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import AppLayout from "@/pages/AppLayout";
import ProtectedRoute from "./ProtectedRoutes";
import NotFound from "@/pages/NotFound";
import Dashboard from "@/pages/Dashboard";
import Master from "@/pages/Master";
import Configuration from "@/pages/Configuration";
import Transaction from "@/pages/Transaction";

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
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: `master/:formName`,
        element: <Master />,
      },
      {
        path: `configuration/:formName`,
        element: <Configuration />,
      },
      {
        path: `transaction/:formName`,
        element: <Transaction />,
      },
    ],
  },

  { path: "*", element: <NotFound /> },
]);
