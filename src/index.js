import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import App from './App';
import About from './About';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App/css/App.css';


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/react-spot-it/" component={App} />
    <Route path="/react-spot-it/about" component={About} />
  </Router>
  ), document.getElementById('root')
);

