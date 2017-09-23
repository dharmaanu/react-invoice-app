import React, { Component } from 'react';
import '../styles/InvoiceList.css';
import {getInvoices} from '../utils/common';

class InvoiceList extends Component {

  constructor() {
    super();
    this.state = {
      invoices: getInvoices(),
    };
  }
  
  render() {    
    return (
      <div className="invoice-list">
      <h1> Invoice List </h1>
      <table>
        <thead>
            <tr>
                <th>Inv #</th>
                <th>Name</th>
                <th>Email</th>
                <th>Issue Date</th>
                <th># of Items</th>
                <th>Total</th>
            </tr>
        </thead>
        <tbody>
        {this.state.invoices &&
        this.state.invoices.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.date}</td>
                  <td>{item.lineItems.length}</td>
                  <td>{item.lineItems.reduce((sum, i) => (
                    sum = sum + +i.amount
                ), 0)}$</td>
                </tr>
            ))}       
        </tbody>
    </table>
      </div>
    )
  }
}
export default InvoiceList;