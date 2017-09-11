import React, {
    Component
}
from 'react';
class Total extends Component {
    render() {
        return (< h3 > Total: { 
                this.props.lineItems.reduce((sum, i) => (
                    sum = sum + +i.amount
                ), 0)
        }$ < /h3>);
    }
}

export default Total;
