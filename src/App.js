import React, { Component } from 'react';

import Invoice from './components/Invoice';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1> Invoice</h1>
        </div>
        <Invoice />
      </div>
    );
  }
}

export default App;