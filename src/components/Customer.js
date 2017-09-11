import React, {Component} from 'react';
import '../styles/Customer.css';

class Customer extends Component {

    componentDidMount() {
        this.customer.focus();
    }

    handleChange = (event) => {
    	this.props.handleInputChange(event);
    }

    render() {
        return ( < div id = "customer" >
        	<div id="customerName">
        	<label> Customer Name </label>
            < input type = "text"
            placeholder = "Customer Name"
            ref = {
                (input) => {
                    this.customer = input;
                }
            }
            name = "customerName"
            value = {
                this.props.customerName
            }
            onChange = {
                this.handleChange
            }
            />
            </div>
            <div id="emailAddress">
            <label> Email Address</label>
            < input type="email"
            placeholder = "Email address"
            name = "email"
            value = {
                this.props.email
            }
            onChange = {
                this.handleChange
            }
            /> 
            </div>
            < /div>
        )
    }
}
export default Customer;
