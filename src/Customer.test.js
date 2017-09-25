import React from 'react';
import { shallow, mount } from 'enzyme';
import Customer from './components/Customer';
import {expect} from 'chai';
import sinon from "sinon";

it('Name and Email fields are rendered', () => {
  const wrapper = shallow(<Customer />);
  expect(wrapper.find('.customer-name')).to.have.length(1);
  expect(wrapper.find('.customer-email')).to.have.length(1);
});

it('Name field change should trigger onChange', () => {
  const onChangeSpy = sinon.spy();
  const wrapper = shallow(<Customer handleInputChange={onChangeSpy} />);
  wrapper.find('.customer-name').simulate("change");
  expect(onChangeSpy.calledOnce).to.be.true;
});

it('Email field change should trigger onChange', () => {
  const onChangeSpy = sinon.spy();
  const wrapper = shallow(<Customer handleInputChange={onChangeSpy} />);
  wrapper.find('.customer-email').simulate("change");
  expect(onChangeSpy.calledOnce).to.be.true;
});