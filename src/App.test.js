import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import {expect} from 'chai';

it('App renders without crashing', () => {
  shallow(<App />);
});

it('App should have heading', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find("h2")).to.have.length(1);
});

it('App should have navigation links', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(".navLinks")).to.have.length(1);
});

it('App should have navigation links', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(".navLinks")).to.have.length(1);
});
