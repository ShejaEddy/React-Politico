import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Routes from "../../router/";
import Sidebar from "./sidebar";

const Content = () => {
  const isLogged = useSelector(state => state.isLogged);
  const path = useLocation().pathname;
  return (
    <div className="content">
      {isLogged &&
        !path.includes("login") &&
        path !== "/" &&
        !path.includes("signup") && <Sidebar />}
      <Routes />
    </div>
  );
};

export default Content;
