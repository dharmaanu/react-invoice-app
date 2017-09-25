import React from 'react';
import { shallow, mount } from 'enzyme';
import InvoiceList from './components/InvoiceList';
import {getInvoices} from './utils/common';
import sinon from "sinon";
import localStorage from 'mock-local-storage';

it('InvoiceList renders without crashing', () => {
  shallow(<InvoiceList />);
});
