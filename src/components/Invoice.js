import React, { Component } from 'react';
import LineItems from './LineItems';
class Invoice extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    };
  }

  componentDidMount(){
     this.customerName.focus();
  }
  
  handleNameChange = (evt) => {
    this.setState({ name: evt.target.value });
  }
  
  handleSubmit = (evt) => {
    const { name, shareholders } = this.state;
    alert(`Incorporated: ${name} with ${shareholders.length} shareholders`);
  }
  
  render() {    
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Customer Name"
          ref={(input) => { this.customerName = input; }} 
          value={this.state.name}
          onChange={this.handleNameChange}
        />    
        <LineItems />
        <button>Send</button>
      </form>
    )
  }
}
export default Invoice;