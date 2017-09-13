import React, {Component} from 'react';
import '../styles/LineItems.css';
import AmountDescription from './AmountDescription';

class LineItems extends Component {

  handleDescriptionChange = (event) => {
   this.props.handleLineDescriptionChange(event);
  }

  handleAmountChange = (event) => {
   this.props.handleLineAmountChange(event);

  }

  handleAddLineItem = () => {
    this.props.handleAddLine();
  }
  
  handleRemoveLineItem = (event) => {
    this.props.handleRemoveLine(event);
  }
  
  render() {    
    return (
      <div className='line-item'>
        {this.props.lineItems.map((lineItem) => (
          <div key={lineItem.id} id={lineItem.id}>
          <table>
            {lineItem.id === 0 && 
              <thead>
                <tr>
                  <th>{`Description`}</th>
                  <th>{`Amount`}</th>
                </tr>
              </thead>
            }       
           <AmountDescription id={lineItem.id} handleAmountChange={this.handleAmountChange}
            handleDescriptionChange={this.handleDescriptionChange} amount={lineItem.amount} 
            description={lineItem.description} handleRemoveLineItem={this.handleRemoveLineItem} />
            </table>
            </div>          
        ))}
        
        <div className ='add-button-div'>
        <button type="button" onClick={this.handleAddLineItem} className="small">Add Item</button> 
        </div>       
        </div>
    )
  }
}

export default LineItems;
