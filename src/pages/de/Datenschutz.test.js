import React from 'react';
import { shallow } from 'enzyme';

import Datenschutz from './Datenschutz';

describe('<Datenschutz/>', () => {
  it('should render', () => {
    const wrapper = shallow(<Datenschutz />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
