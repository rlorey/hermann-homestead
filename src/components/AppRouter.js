import React from 'react';
import Home from './Home';
import ErrorPage from './ErrorPage'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/oops' component={ErrorPage} />

        <Redirect to='/oops' />
      </Switch>
    </Router>
  );
}

export default AppRouter;
