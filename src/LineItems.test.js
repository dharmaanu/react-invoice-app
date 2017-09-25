import React from 'react';
import { shallow, mount } from 'enzyme';
import LineItems from './components/LineItems';
import AmountDescription from './components/AmountDescription';
import {expect} from 'chai';
import {convertToTraditionalFormat} from './utils/dateUtil';
import {generateInvoiceID} from './utils/common';
import sinon from "sinon";

describe("LineItems Tests", () => {
    const changeHandler = sinon.spy();
    const lineItems = [{
        id: 1,
        amount: 23,
        description: 'Testabc'
      }];
it('LineItems render without crashing', () => {
  shallow(<LineItems lineItems={lineItems}/>);
});

it('LineItems should render AmountDescription component', () => {
  const wrapper = mount(<LineItems lineItems={lineItems}/>);
  expect(wrapper.find(AmountDescription)).to.have.length(1);
});

it('LineItems should render a minus button', () => {
  const wrapper = shallow(<LineItems lineItems={lineItems}/>);
  expect(wrapper.find(".plus-button")).to.have.length(1);
});

it('Add button click should call onClick handler', () => {
  const wrapper = mount(<LineItems lineItems={lineItems} handleAddLine={changeHandler} />);
  wrapper.find('.plus-button').simulate("click");
  expect(changeHandler.calledOnce).to.be.true;
});

});