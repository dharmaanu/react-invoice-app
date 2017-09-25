import React, {Component} from 'react';
import '../styles/InvoiceDate.css';

class InvoiceDate extends Component {

    handleChange = (event) => {
    	this.props.handleInputChange(event);
    }

    render() {
        return (
        	<div id="invoiceDate">
        	<label> Invoice Date </label>
            <input type="date" name="invoiceDate" 
            onChange = {this.handleChange} className="invoice-date" />
            </div>
        )
    }
}
export default InvoiceDate;