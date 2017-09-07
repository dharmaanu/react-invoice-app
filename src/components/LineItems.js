import React, {
    Component
}
from 'react';
import '../styles/LineItems.css';
import Total from './Total';

class LineItems extends Component {
   constructor() {
    super();
    this.state = {
      lineItems: [{ description: '' , amount: '' }],
      total: 0
    };
  }
  
  handleDescriptionChange = (idx) => (evt) => {
    const newLineItems = this.state.lineItems.map((lineitem, sidx) => {
      if (idx !== sidx) return lineitem;
      return { ...lineitem, description: evt.target.value};
    });
    
    this.setState({ lineItems: newLineItems });
  }

  handleAmountChange = (index, val) => {
    this.setState({
      lineItems: this.state.lineItems.map((lineItem, i) => (
        i === index ? {...lineItem, amount: val} : lineItem
      ))
    })
  }

  handleAddLineItem = () => {
    this.setState({ lineItems: this.state.lineItems.concat([{ description: '', amount: ''}]) });
  }
  
  handleRemoveLineItem = (item) => {
    const newState = this.state.lineItems;
    if (newState.indexOf(item) > -1) {
      newState.splice(newState.indexOf(item), 1);
      this.setState({lineItems: newState})
    }
  }
  
  render() {    
    return (
      <div>
           <h5 style={{margin:30}}>Description</h5><h5 style={{margin:45}}>Amount</h5>
      
        {this.state.lineItems.map((lineItem, index) => (
         <div key={`lineItem-${index}`}>        
            <input
              type="text"
              placeholder={`Product/Service ${index+1}`}
              value={this.state.lineItems[index].description} key={`lineItem.description.name-${index}`}
              onChange={this.handleDescriptionChange(index)}
            />

            <input
              type="text"
              placeholder={`Amount`}
              value={this.state.lineItems[index].amount} key={`lineItem.amount.name-${index}`}
              onChange={e => this.handleAmountChange(index, (e.target.value) || 0)}
            />
      
            <button type="button" onClick={this.handleRemoveLineItem.bind(this, lineItem)} className="small">-</button>
          </div>
        ))}
        
        <button type="button" onClick={this.handleAddLineItem} className="small">Add Item</button>
        <Total lineItems={this.state.lineItems} />
        </div>
    )
  }
}

export default LineItems;
