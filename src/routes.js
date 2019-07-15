import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './Components/Landing';
import Auth from './Components/Auth';
import BrowseEvents from './Components/BrowseEvents';
import ViewEvent from './Components/ViewEvent';
import CreateEvent from './Components/CreateEvent';
import Settings from './Components/Settings';
import About from './Components/About';
import Contact from './Components/Contact';
import NotFound404 from './Components/NotFound404';

export default (
   <Switch>
      <Route component={Landing} exact path='/' />
      <Route component={Auth} path='/auth' />
      <Route component={CreateEvent} path='/events/create' />
      <Route component={ViewEvent} path='/events/:eventId' />
      <Route component={BrowseEvents} path='/events' />
      <Route component={Settings} path='/settings' />
      <Route component={About} path='/about' />
      <Route component={Contact} path='/contact' />
      <Route component={NotFound404} />
   </Switch>
);