import React from "react";
import { createBrowserRouter } from "react-router-dom";
import RootContainer from "../page/RootContainer/RootContainer";
import Landing from "../page/Landing";
import Home from "../page/Home";
import Register from "../page/Register";

export const ROUTER_LINK = {
  LANDING: { path: "/", link: "/" },
  HOME: { path: "/home", link: "/home" },
  REGISTER: { path: "register", link: "/register" },
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootContainer />,
    children: [
      {
        path: ROUTER_LINK.LANDING.path,
        element: <Landing />,
      },
      {
        path: ROUTER_LINK.HOME.path,
        element: <Home />,
      },
      {
        path: ROUTER_LINK.REGISTER.path,
        element: <Register />,
      },
    ],
  },
]);

export default router;
