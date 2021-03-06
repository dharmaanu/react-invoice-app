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
          <div key={lineItem.id} id={lineItem.id} className='items'>
          <table>
            {lineItem.id === 0 && 
              <thead>
                <tr>
                  <th><label className='description-label'>{`Description`}</label></th>
                  <th><label className='amount-label'>{`Amount`}</label></th>
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
        <button type="button" onClick={this.handleAddLineItem} className="plus-button">+</button> 
        </div>       
        </div>
    )
  }
}

export default LineItems;
