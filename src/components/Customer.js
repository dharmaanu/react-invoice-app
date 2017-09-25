import React, {
    Component
}
from 'react';
import '../styles/Customer.css';
/**
    Component that handles rendering Customer name & email and 
    lifts up their onChange events.
**/
class Customer extends Component {

    componentDidMount() {
        this.customer.focus();
    }

    handleChange = (event) => {
        this.props.handleInputChange(event);
    }

    render() {
        return (<div id = "customer" >
            <div id="customerName" >
            <label>Customer Name</label> <input type = "text" required
            placeholder = "Customer Name" className="customer-name"
            ref = {
                (input) => {
                    this.customer = input;
                }
            }
            name = "customerName" value = {this.props.customerName}
            onChange = {this.handleChange}/> 
            </div>
            <div id = "emailAddress">
            <label> Email Address </label> <input type = "email"
            placeholder = "Email address" className="customer-email"
            name = "email" value = {this.props.email} required
            onChange = {this.handleChange}
            />
            </div>
            </div>
        )
    }
}
export default Customer;
