import React from 'react';
import { shallow, mount } from 'enzyme';
import InvoiceDate from './components/InvoiceDate';
import {expect} from 'chai';
import sinon from "sinon";

it('Invoice date fields are rendered', () => {
  const wrapper = shallow(<InvoiceDate />);
  expect(wrapper.find('.invoice-date')).to.have.length(1);
});

it('Date field change should trigger onChange', () => {
  const onChangeSpy = sinon.spy();
  const wrapper = shallow(<InvoiceDate handleInputChange={onChangeSpy} />);
  wrapper.find('.invoice-date').simulate("change");
  expect(onChangeSpy.calledOnce).to.be.true;
});

