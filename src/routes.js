import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './Components/Landing';
import BrowseEvents from './Components/BrowseEvents';
import ViewEvent from './Components/ViewEvent';
// import CreateEvent from './Components/CreateEvent';
import About from './Components/About';
import Contact from './Components/Contact';
import NotFound404 from './Components/NotFound404';
import Authorization from './component/authorization';
import MyEvents from './Components/Myevents'

export default (
   <Switch>
      <Route component={Landing} exact path='/' />
      <Route component={Authorization} path='/auth' />
      <Route component={Authorization} path='/events/create' />
      <Route component={ViewEvent} path='/events/:eventId' />
      <Route component={BrowseEvents} path='/events' />
      <Route component={About} path='/about' />
      <Route component={Contact} path='/contact' />
      <Route component={MyEvents} path='/myevents' />
      <Route component={NotFound404} />
   </Switch>
);