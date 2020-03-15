import Cabins from './Cabins';
import ErrorPage from './ErrorPage'
import Gallery from './Gallery';
import HitTheTown from './HitTheTown';
import Home from './Home';
import Lumber from './Lumber';
import MeetTheFamily from './MeetTheFamily';
import React from 'react';
import Yoga from './Yoga';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/cabins' component={Cabins} />
        <Route exact path='/gallery' component={Gallery} />
        <Route exact path='/hit-the-town' component={HitTheTown} />
        <Route exact path='/lumber' component={Lumber} />
        <Route exact path='/meet-the-family' component={MeetTheFamily} />
        <Route exact path='/oops' component={ErrorPage} />
        <Route exact path='/yoga' component={Yoga} />

        <Redirect to='/oops' />
      </Switch>
    </Router>
  );
}

export default AppRouter;
