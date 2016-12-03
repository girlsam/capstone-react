//node modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, Redirect } from 'react-router';

//components
import App from './components/app';
import Default404 from './components/Default404';
import Main from './components/Main';
import User from './components/Users';
import Room from './components/Rooms';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Main} />
      <Route path="404" component={Default404} />
      <Route path="/users" component={User} />
      <Route path="/rooms" component={Room} />
      <Redirect from="*" to="/404" />
    </Route>
  </Router>
  , document.querySelector('.app'));
