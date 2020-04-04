import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/pages/index";
import Login from "../components/pages/auth/login";
import SignUp from "../components/pages/auth/signup";
import ForgotPassword from "../components/pages/auth/forgotPassword";
import Parties from "../components/pages/parties/";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/forgot-password" component={ForgotPassword} />
      <Route path="/parties" component={Parties} />
    </Switch>
  );
};

export default Routes;
