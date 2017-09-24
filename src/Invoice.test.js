import React from 'react';
import { shallow, mount } from 'enzyme';
import Invoice from './components/Invoice';
import Customer from './components/Customer';
import LineItems from './components/LineItems';
import AmountDescription from './components/AmountDescription';
import InvoiceDate from './components/InvoiceDate';
import Total from './components/Total';
import {expect} from 'chai';
import {convertToTraditionalFormat} from './utils/dateUtil';
import {generateInvoiceID} from './utils/common';

it('Invoice renders without crashing', () => {
  shallow(<Invoice />);
});

it('Invoice Submit button is shown only once', () => {
  const invoiceWrapper = shallow(<Invoice />);
  expect(invoiceWrapper.find('button.submit')).to.have.length(1);
});

it('Invoice form is shown', () => {
  const invoiceWrapper = shallow(<Invoice />);
  expect(invoiceWrapper.find('form')).to.have.length(1);
});

it('Invoice total is 0 when there are no line Items', () => {
  const invoiceWrapper = mount(<Invoice />);
  expect(invoiceWrapper.find("h3").text()).to.include("Total: 0$");
});

it('Invoice id can be generated', () => {
  const invoiceID = generateInvoiceID();
  expect(invoiceID).to.include("INV");
});


it('Invoice renders its child components when state is set', () => {
  const invoiceWrapper = mount(<Invoice />);
  invoiceWrapper.setState({
      customerName: 'ABC',
      email: 'abc@corp.com',
      date: convertToTraditionalFormat(new Date()),
      lineItems: [{
        id: 1,
        amount: 23,
        description: 'Testabc'
      }]
    });
    expect(invoiceWrapper.find(Customer)).to.have.length(1);
    expect(invoiceWrapper.find(LineItems)).to.have.length(1);
    expect(invoiceWrapper.find(AmountDescription)).to.have.length(1);
    expect(invoiceWrapper.find(Total)).to.have.length(1);
    expect(invoiceWrapper.find(InvoiceDate)).to.have.length(1);
  });

it('Invoice # of Amount/Desc fields matches lineItems in state', () => {
  const invoiceWrapper = mount(<Invoice />);
  invoiceWrapper.setState({
      lineItems: [{
        id: 1,
        amount: 23,
        description: 'Testabc'
      },{
        id: 2,
        amount: 34,
        description: 'Testxyz'
      }
      ]
    });
    // Two sets of Amount/Desc fields are displayed for 2 lineItems
    expect(invoiceWrapper.find(AmountDescription)).to.have.length(2);
    //Total field is only rendered once
    expect(invoiceWrapper.find(Total)).to.have.length(1);
    //Total field should show sum of line items
    expect(invoiceWrapper.find("h3").text()).to.include("Total: 57$");
    //Line Items label is only displayed once
    expect(invoiceWrapper.find(LineItems)).to.have.length(1);

  });

it('Plus button is shown only once for 1 lineItem', () => {
  const invoiceWrapper = mount(<Invoice />);
  invoiceWrapper.setState({
      customerName: 'ABC',
      email: 'abc@corp.com',
      date: convertToTraditionalFormat(new Date()),
      lineItems: [{
        id: 1,
        amount: 23,
        description: 'Testabc'
      }]
    });
    expect(invoiceWrapper.find('button.plus-button')).to.have.length(1);
  });

it('Minus button is shown only once for 1 lineItem', () => {
  const invoiceWrapper = mount(<Invoice />);
  invoiceWrapper.setState({
      customerName: 'ABC',
      email: 'abc@corp.com',
      date: convertToTraditionalFormat(new Date()),
      lineItems: [{
        id: 1,
        amount: 23,
        description: 'Testabc'
      }]
    });
    expect(invoiceWrapper.find('button.minus-button')).to.have.length(1);
  });