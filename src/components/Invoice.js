import React, { Component } from 'react';
import LineItems from './LineItems';
import Customer from './Customer';
import InvoiceDate from './InvoiceDate';
import {generateInvoiceID} from '../utils/common';

class Invoice extends Component {
  constructor() {
    super();
    this.state = {
      customerName: '',
      email: '',
      date: ''
    };
  }
  
  handleInputChange = (e) => {
    this.setState({[e.currentTarget.name]
            : e.currentTarget.value
  });
  }
  
  handleSubmit = (evt) => {
    const { name, shareholders } = this.state;
    alert(`Incorporated: ${name} with ${shareholders.length} shareholders`);
  }

  renderCustomer = () => {
    return (
      <Customer customerName = {this.state.customerName}
      email = {this.state.email}
      handleInputChange = {this.handleInputChange} />
      );
  }

  renderDate = () => {
    return (
    <InvoiceDate date={this.state.date}
    handleInputChange={this.handleInputChange} />
    );
  }
  
  render() {    
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderCustomer()}
        {this.renderDate()}
        <LineItems />
        <button>Send</button>
      </form>
    )
  }
}
export default Invoice;