import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Cart from "./Component/Cart/Cart.jsx";
import MainAuth from "./Component/Authentication/MainAuth.jsx";
import DashboardMain from "./Component/Dashboard/DashboardMain.jsx";
import Setting from "./Component/Setting/Setting.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/auth",
    element: <MainAuth />,
  },
  {
    path: "/dashboard",
    element: <DashboardMain />,
  },
  { path: "/setting", element: <Setting /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
