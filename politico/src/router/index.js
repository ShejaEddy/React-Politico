import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/pages/index';
import Login from '../components/pages/auth/login';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact strict component={Home} />
      <Route path="/login" component={Login} />
    </Switch>
  );
};

export default Routes;
