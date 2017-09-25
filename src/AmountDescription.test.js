import React from 'react';
import { shallow, mount } from 'enzyme';
import AmountDescription from './components/AmountDescription';
import {expect} from 'chai';
import sinon from "sinon";

it('Amount and Description fields are rendered', () => {
  const wrapper = shallow(<AmountDescription />);
  expect(wrapper.find('.amount')).to.have.length(1);
  expect(wrapper.find('.description')).to.have.length(1);
});

it('Amount field change should trigger onChange', () => {
  const onChangeSpy = sinon.spy();
  const wrapper = shallow(<AmountDescription handleAmountChange={onChangeSpy} />);
  wrapper.find('.amount').simulate("blur");
  expect(onChangeSpy.calledOnce).to.be.true;
});

it('Description field change should trigger onChange', () => {
  const onChangeSpy = sinon.spy();
  const wrapper = shallow(<AmountDescription handleDescriptionChange={onChangeSpy} />);
  wrapper.find('.description').simulate("blur");
  expect(onChangeSpy.calledOnce).to.be.true;
});

it('Click - button should call the onClick Handler', () => {
  const onChangeSpy = sinon.spy();
  const wrapper = shallow(<AmountDescription handleRemoveLineItem={onChangeSpy} />);
  wrapper.find('.minus-button').simulate("click");
  expect(onChangeSpy.calledOnce).to.be.true;
});