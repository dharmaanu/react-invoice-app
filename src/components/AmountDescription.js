import React, {Component} from 'react';
import '../styles/AmountDescription.css';

class AmountDescription extends Component {

    handleDescriptionChange = (event) => {
        this.props.handleDescriptionChange(event);
    }

    handleAmountChange = (event) => {
        this.props.handleAmountChange(event);

    }
    handleRemoveLineItem =(event) => {
    	this.props.handleRemoveLineItem(event);
    }

render() {    
    return (
         <tbody>       
         <tr key={this.props.id}><td>       
            <input
              type="text" id={this.props.id} key={this.props.id} 
              placeholder={`Product/Service ${this.props.id+1}`}
              defaultValue={this.props.description} className="description"
              onBlur={(e) => this.handleDescriptionChange(e)}
            />
            </td>
            <td>
            <input
              type="text" id={this.props.id} key={this.props.id}
              placeholder={`Amount`} className="amount"
              defaultValue={this.props.amount} 
              onBlur={(e) => this.handleAmountChange(e)}
            />
            </td>
            <td>
            <button type="button" id={this.props.id} key={this.props.id} 
            onClick={(e) => this.handleRemoveLineItem(e)} className="small">-</button></td>
            </tr>
            </tbody>         
        );
  }
}

export default AmountDescription;
