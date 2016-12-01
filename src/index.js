import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import App from './App';
import About from './About';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App/css/App.css';


ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App} />
    <Route path="/about/" component={About} />
  </Router>
  ), document.getElementById('root')
);

