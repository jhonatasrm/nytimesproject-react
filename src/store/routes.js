import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import News from '../pages/News';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/news" component={News} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);
export default Routes;
