import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import SignIn from '../pages/Singin';
import SignUp from '../pages/Singup';

import Profile from '../pages/Profile';
import Dashboard from '../pages/Dashboard';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" exact component={SignUp} />

      <Route path="/profile" exact component={Profile} isPrivate />
      <Route path="/dashboard" exact component={Dashboard} isPrivate />
    </Switch>
  );
}
