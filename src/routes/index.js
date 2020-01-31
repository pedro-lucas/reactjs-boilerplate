import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import LogIn from '../screens/LogIn';
import Home from '../screens/Home';

export default function Routes() {
   return (
      <Switch>
         <Route path="/" exact component={LogIn} needsAuth={false} />
         <Route path="/home" exact component={Home} />
         <Route
            path="/"
            exact
            component={() => <h1>404</h1>}
            needsAuth={false}
         />
      </Switch>
   );
}
