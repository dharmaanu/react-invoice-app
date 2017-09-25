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
      <table className="invoiceList-table">
        <thead className="invoiceList-head">
            <tr className="invoiceList-row">
                <th className="invoiceList-th">Inv #</th>
                <th className="invoiceList-th">Name</th>
                <th className="invoiceList-th">Email</th>
                <th className="invoiceList-th">Issue Date</th>
                <th className="invoiceList-th"># of Items</th>
                <th className="invoiceList-th">Total</th>
            </tr>
        </thead>
        <tbody className="invoiceList-tbody">
        {this.state.invoices &&
        this.state.invoices.map((item) => (
                <tr className="invoiceList-row" key={item.id}>
                  <td className="invoiceList-td">{item.id}</td>
                  <td className="invoiceList-td">{item.name}</td>
                  <td className="invoiceList-td">{item.email}</td>
                  <td className="invoiceList-td">{item.date}</td>
                  <td className="invoiceList-td">{item.lineItems.length}</td>
                  <td className="invoiceList-td">{item.lineItems.reduce((sum, i) => (
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