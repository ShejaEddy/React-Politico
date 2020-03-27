import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/pages/index';
import Login from '../components/pages/auth/login';
import SignUp from '../components/pages/auth/signup';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact strict component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
    </Switch>
  );
};

export default Routes;
