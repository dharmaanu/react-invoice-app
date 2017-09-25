import React, { Component } from 'react';
import LineItems from './LineItems';
import Customer from './Customer';
import InvoiceDate from './InvoiceDate';
import {generateInvoiceID} from '../utils/common';
import {validateLineItems} from '../utils/common';
import Total from './Total';
import {convertToTraditionalFormat} from '../utils/dateUtil';
import '../styles/Invoice.css';
/**
    Main component that holds the state. Data flows downward form Invoice to 
    Customer, LineItems and InvoiceDate
**/

class Invoice extends Component {
  constructor() {
    super();
    this.lineItemId = 0;
    this.state = {
      customerName: '',
      email: '',
      date: convertToTraditionalFormat(new Date()),
      lineItems: [{
        id: this.lineItemId,
        amount: '',
        description: ''
      }]
    };
  }
  
  handleInputChange = (e) => {
    this.setState({[e.currentTarget.name]
            : e.currentTarget.value
  });
  }

  handleDateChange = (e) => {
    this.setState({ date: convertToTraditionalFormat(e.currentTarget.value) })
  }
  /**
    Handle submit - Save current state properties in localStorage
  **/   
  handleSubmit = (evt) => {
     const invoiceID = generateInvoiceID();
     let invoiceDetails = {
         id: invoiceID,
         name: this.state.customerName,
         email: this.state.email,
         date: this.state.date,
         lineItems: this.state.lineItems
     }
  /** Validation to check whether lineItems have a valid amount 
      If not block saving invoice
  **/
     if (validateLineItems(this.state.lineItems)) {
         localStorage.setItem(invoiceID, JSON.stringify(invoiceDetails));
         alert(`Invoice ${invoiceID} saved!!`);
     } else {
         alert(`One or more required fields are empty`);
         evt.preventDefault();
     }

 }

  handleDescriptionChange = (event) => {
    this.setState({
      lineItems: this.state.lineItems.map((lineItem) => (
        parseInt(event.target.id, 10) === lineItem.id ? {...lineItem, description: event.target.value} : lineItem
      ))
    })
  }

  handleAmountChange = (event) => {
    const currentLineItems = this.state.lineItems;
    currentLineItems.map((lineItem) => (
      parseInt(event.target.id, 10) === lineItem.id ? lineItem.amount = event.target.value : lineItem
      ))
    this.setState({lineItems: currentLineItems});
  }

  handleAddLineItem = () => {
    this.lineItemId++;
    this.setState({ 
      lineItems: this.state.lineItems.concat([{ id: this.lineItemId, description: '', amount: ''}]) });
  }
  
  handleRemoveLineItem = (event) => {
    const newItems = this.state.lineItems;
    newItems.splice(newItems.indexOf(event.target.id), 1);
    this.setState({
        lineItems: newItems
    });
}

  renderCustomer = () => {
    return (
      <Customer customerName = {this.state.customerName}
      email = {this.state.email}
      handleInputChange = {this.handleInputChange} />
      );
  }

  renderLineItems = () => {
    return (
    <LineItems lineItems={this.state.lineItems} handleLineAmountChange={this.handleAmountChange}
    handleLineDescriptionChange={this.handleDescriptionChange} handleAddLine = {this.handleAddLineItem}
    handleRemoveLine = {this.handleRemoveLineItem} />
    );
  }

  renderDate = () => {
    return (
    <InvoiceDate date={this.state.date}
    handleInputChange={this.handleDateChange} />
    );
  }
  
  render() {    
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderCustomer()}
        {this.renderDate()}
        {this.renderLineItems()}
        <Total lineItems={this.state.lineItems}  />
        <button className="submit">Send</button>
      </form>
    )
  }
}
export default Invoice;