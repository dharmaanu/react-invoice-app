import React, { Component } from 'react';
import Invoice from './components/Invoice';
import InvoiceList from './components/InvoiceList';
import Home from './components/Home';
import logo from './logo.svg';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Invoice</h2>
        </div>
           <div className="navLinks">
           <p><Link to="/">Home</Link></p>
           <p><Link to="/invoice">Create Invoice</Link></p>
           <p><Link to="/invoices">Invoice List</Link></p>
           <hr/>
           </div>
           <Switch>
           <Route exact path="/" exact component={Home} />
           <Route path="/invoice" component={Invoice} />
           <Route path="/invoices" component={InvoiceList} />
           </Switch>
          </div>
          </BrowserRouter>  
    );
  }
}

export default App;