import React from 'react';
import { shallow } from 'enzyme';

import Hamburger from './Hamburger';

describe('<Hamburger/>', () => {
  it('should render', () => {
    const wrapper = shallow(<Hamburger />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
