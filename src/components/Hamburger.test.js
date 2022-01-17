import React from 'react';
import { shallow } from 'enzyme';

import Hamburger from './Hamburger';

describe('<Hamburger/>', () => {
  it('should render closed', () => {
    const wrapper = shallow(<Hamburger onClick={() => true} />);
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('should render open', () => {
    const wrapper = shallow(<Hamburger onClick={() => true} open />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
