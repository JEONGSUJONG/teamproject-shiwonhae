import React from "react";
import { Outlet } from "react-router-dom";
import { ROUTER_LINK } from "../../router/routes";
import Navbar from "../../components/Navbar";

const RootContainer = () => {
  return (
    <div>
      <Outlet />
      <Navbar />
    </div>
  );
};

export default RootContainer;
