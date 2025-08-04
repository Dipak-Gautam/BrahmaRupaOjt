import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Cart from "./Component/Cart/Cart.jsx";
import DashboardMain from "./Component/Dashboard/DashboardMain.jsx";
import Setting from "./Component/Setting/Setting.jsx";
import Home from "./Home.jsx";
import AddProduct from "./Component/AddProduct/AddProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/dashboard",
        element: <DashboardMain />,
      },
      { path: "/setting", element: <Setting /> },
      { path: "/Product", element: <AddProduct /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
