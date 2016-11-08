import React, { Component } from 'react';
import Header from './App/component/Header';
import ListApp from './App/component/ListApp';
import './App/logic/spotIt.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App/css/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ListApp />
      </div>
    );
  }
}

export default App;