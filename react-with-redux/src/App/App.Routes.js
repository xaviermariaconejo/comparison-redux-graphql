import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { Login, NotFound } from './Pages';

const AppRoutes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/404" component={NotFound} />
    <Redirect from="*" to="/404" />
  </Switch>
);

AppRoutes.displayName = 'App.Routes';

export default AppRoutes;
