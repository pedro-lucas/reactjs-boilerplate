import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import LogIn from '../screens/LogIn';
import Dashboard from '../screens/Dashboard';

export default function Routes() {
   return (
      <Switch>
         <Route path="/" exact component={LogIn} needsAuth={false} />
         <Route path="/admin" exact component={Dashboard} />
         <Route path="/admin/dashboard" exact component={Dashboard} />
         <Route
            path="/"
            exact
            component={() => <h1>404</h1>}
            needsAuth={false}
         />
      </Switch>
   );
}
